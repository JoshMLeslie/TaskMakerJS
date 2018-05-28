import * as levelOne from '../levels/levelOne';
import * as Colors from '../../util/font_colors';
import Sprite from '../../util/sprite';
import Resources from '../../util/load_resources';

import _ from 'underscore';

export default class PlayArea {

  constructor (canvasEl, ctx) {
    this.ctx = ctx;
    this.width = 405;
    this.height = 405;

    const centering = (canvasEl.height - this.height) / 2;
    this.x = canvasEl.width - this.width - centering + 30;
    this.y = canvasEl.height - this.height - centering + 25 ;
  }

  drawLevels(levels) {
    for (let level_key in levels) {
      const level = levels[level_key];

      for (let room_key in level) {
        return this.drawLevel(level[room_key]); // bubble up 'walls'
      }
    }
  }

  spriteX (obj_idx) { // same same, but diff.
    let modulo = obj_idx % 9;
    if (modulo < 0) { modulo = 8; }
    return (353 + (modulo * 45));
  }

  spriteY (obj_idx) { // but same same.
    let floored = Math.floor(obj_idx / 9);
    return (88 + (floored * 45));
  }

  drawLevel(room) {
    const ctx = this.ctx;
    // dev: make objects from top left, right, then typerwritter down, for consistency's sake.

    // 'room' is a (big) array / POJO

    let walls = {}; // to hold position of all walls on the map
    let entities = {}; // to hold position of all entities " "

    room.forEach((obj, obj_idx) => {
      const x = this.spriteX(obj_idx);
      const y = this.spriteY(obj_idx);

      if (!obj.srcX) {
        // ensure attr's
        obj.srcX = 0;
        obj.srcY = 0;
      }

      let obj_type = (
        obj.image_url.match( /(sprites\/\w*\/)(\w*)/ )[2]
      );

      if (obj_type.includes('wall') || obj.type === 'wall') {
        Object.assign( walls, { [obj_idx]: [x,y] } );
      }

      Object.assign(
        entities,
        { [obj_idx]: {
          pos: [x,y],
          type: obj_type
        } }
      );

      new Sprite (
        this.ctx,
        obj.image_url,
        x, y,
        obj.srcX, obj.srcY
      );
    });

    return {walls, entities}; // bubbles up to drawLevels as pojo
  }

  draw () {
    const ctx = this.ctx;
    
    ctx.clearRect(this.x, this.y, this.width, this.height);

    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.height, this.width);

    return this.drawLevels({ // bubble up 'walls'
      levelOne
    });

  }
}
