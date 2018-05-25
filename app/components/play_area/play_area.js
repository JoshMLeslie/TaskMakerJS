import {levelOne} from '../levels/levelOne';

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
    levels.forEach(level => { this.drawLevel(level); });
  }

  drawLevel (level) {
    const ctx = this.ctx;
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

  draw () {
    const ctx = this.ctx;
    ctx.clearRect(this.x, this.y, this.width, this.height);


    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.height, this.width);
    
    const levels = [levelOne];

    this.drawLevels(levels);
  }
}
