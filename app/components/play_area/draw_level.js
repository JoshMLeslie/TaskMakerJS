import Sprite from '../../util/sprite';

import _ from 'underscore';

const spriteX = (obj_idx) => { // same same, but diff.
  let modulo = obj_idx % 9;
  if (modulo < 0) { modulo = 8; }
  return (353 + (modulo * 45));
};

const spriteY = (obj_idx) => { // but same same.
  let floored = Math.floor(obj_idx / 9);
  return (88 + (floored * 45));
};

const drawSprites = (sprites) => {
  sprites.forEach( sprite => {
    sprite.draw();
  });
};

const drawLevel = (ctx, room, sprites, newSprites) => {
  // dev: make objects from top left, right, then typerwritter down, for consistency's sake.

  // 'room' is a (big) array / POJO

  let walls = {}; // to hold position of all walls on the map
  let entities = {}; // to hold position of all entities " "
  sprites = sprites || []; // to hold all sprites

  room.forEach((obj, obj_idx) => {
    const x = spriteX(obj_idx);
    const y = spriteY(obj_idx);

    // Who needs State anyways right? Me. I do. I need it.
    obj.srcX = obj.srcX || 0;
    obj.srcY = obj.srcY || 0;
    obj.text = obj.text || "";

    let obj_type = (
      obj.image_url.match( /(sprites\/\w*\/)(\w*)/ )[2]
    );
    // match returns a lot of stuff, who knew? (rhetorical)

    if (obj_type.includes('wall') || obj.type === 'wall') {
      Object.assign( walls, { [obj_idx]: [x,y] } );
    } // you say bandage I say flexibility

    Object.assign(
      entities,
      { [obj_idx]: {
        pos: [x,y],
        type: obj_type,
        text: obj.text
      } }
    );

    if (newSprites) {
      sprites.push (
        new Sprite (
          ctx,
          obj.image_url,
          x, y,
          obj.srcX, obj.srcY
        )
      );
    } else {
      drawSprites(sprites);
    }
  });

  return {walls, entities, sprites}; // bubbles up to drawLevels as pojo
};

export default drawLevel;
