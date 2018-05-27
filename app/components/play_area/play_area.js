import * as levelOne from '../levels/levelOne';
import * as Colors from '../../util/font_colors';
import Sprite from '../../util/sprite';
import Resources from '../../util/load_resources';

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
        this.drawLevel(level[room_key]);
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

    room.forEach((obj, obj_idx) => {
      if (!obj.srcX) {
        // ensure attr's
        obj.srcX = 0;
        obj.srcY = 0;
      }

      new Sprite (
        this.ctx,
        obj.image_url,
        this.spriteX(obj_idx),
        this.spriteY(obj_idx),
        obj.srcX,
        obj.srcY
        // type = obj.type // ??
      );
    });
  }

  draw () {
    const ctx = this.ctx;
    ctx.clearRect(this.x, this.y, this.width, this.height);


    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.height, this.width);
    this.drawLevels({
      levelOne
    });
    // resources.load([
    //   "../../assets/sprites/walls/stone_wall.png"
    // ]);
    // resources.onReady(this.makeAwall);
    // this.makeAwall();
  }
}
