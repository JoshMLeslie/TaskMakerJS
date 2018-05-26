import * as levelOne from '../levels/levelOne';
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

  drawLevel(room) {
    const ctx = this.ctx;
    // dev: make objects from top left, snake right, then down, for consistency's sake.

    // 'level' is a (complex) POJO
    for (let type_key in room) {
      // type_key == 'wall', 'floor', etc.

      for (let object_key in room[type_key]) {
        let sprite_data = room[type_key][object_key];
        
        switch(type_key) { // key == wall, floor, etc.
          case "walls":

            new Sprite (
              this.ctx,
              sprite_data.image_url,
              sprite_data.x,
              sprite_data.y
            );
        }
      }
    }
  }



  makeAwall () {

    // const wallSprite = new Sprite (
    //   this.ctx,
    //   "app/assets/sprites/walls/stone_wall.png",
    //   375,175
    // );
    // same same

    // const img =  new Image ();
    //
    // img.onload = () => {
    //   debugger
    //
    //   this.ctx.drawImage(
    //     img,
    //       0, 0,
    //       35, 35,
    //       400, 150,
    //       45, 45
    //   );
    // };
    //
    // img.src = "app/assets/sprites/walls/stone_wall.png";



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
