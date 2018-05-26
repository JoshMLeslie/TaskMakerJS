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
    for (let key in levels) {
      const level = levels[key];

      for (let room in level) {
        this.drawLevel(level[room]);
      }
    }
  }

  drawLevel(level) {
    const ctx = this.ctx;
    // dev: make objects from top left, snake right, then down, for consistency's sake.

    // 'level' is a (complex) POJO
    for (let key in level) {
      for (let object in level[key]) {
        switch(key) { // key == wall, floor, etc.
          case "walls":
            const obj = level[key][object];
            ctx.fillStyle = obj.color;
            ctx.fillRect(obj.x, obj.y, obj.height, obj.width);
        }
      }
    }
  }



  makeAwall () {

    // const wallSprite = new Sprite (
    //   this.ctx,
    //   45, 45,
    //   "app/assets/sprites/walls/stone_wall.png"
    // );
    const img =  new Image ();

    img.onload = () => {
      debugger

      this.ctx.drawImage(
        img,
          0, 0,
          35, 35,
          400, 150,
          45, 45
      );
    };

    img.src = "app/assets/sprites/walls/stone_wall.png";



  }


  draw () {
    const ctx = this.ctx;
    ctx.clearRect(this.x, this.y, this.width, this.height);


    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.height, this.width);
    // this.drawLevels({
    //   levelOne
    // });
    // resources.load([
    //   "../../assets/sprites/walls/stone_wall.png"
    // ]);
    // resources.onReady(this.makeAwall);
    this.makeAwall();
  }
}
