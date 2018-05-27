import * as Colors from '../../util/font_colors';
import _ from 'underscore';


export default class StatsArea {
  constructor (canvasEl, ctx, score) {
    this.ctx = ctx;
    this.width = 305;
    this.height = 227;

    this.score = score || 0;

    this.x = 10;
    this.y = 293;

    this.statVals = {
      // starting vals ( 20, 20 )
      // starting vals ( 20, 30 ) to display hatch
      Food: [20, 30],
      Health: [20, 30],
      Spirit: [20, 30],
      Strength: [20, 30],
      Agility: [20, 30],
      Intellect: [20, 30],
      Stamina: [20, 30],
    };

    this.updateStat = this.updateStat.bind(this);
    this.boostStat = this.boostStat.bind(this);
    this.draw = this.draw.bind(this);
  }

  updateStat(stat, dVal, callback) {
    // for affecting the pool
    if (dVal === "max") {
      const setVal = Object.assign(this.statVals[stat][1]);
      this.statVals[stat][0] = setVal;
    } else {
      if (this.statVals[stat][0] > 0) {
        this.statVals[stat][0] += dVal;

        if ( callback ) { callback(); } // not sure if I actually need/want this, but leaving it for now.
      } else {
        window.alert("You must rest! Press 'r' ");
      }
    }
  }

  boostStat(stat, dVal) { // for increasing the maximum
    this.statVals[stat][1] += dVal;
  }

  displayScore (score=0) {
    const ctx = this.ctx;

    const vPos = 315;

    ctx.beginPath(); // disp "Score"
      ctx.fillStyle = Colors.textBlack;
      ctx.font = "20px serif";
    ctx.fillText("Score", 20, vPos);

    let horizontalAdj = 295;
    if (score >= 10 && score < 99) { horizontalAdj -= 10; }
    else if (score >= 100 && score < 1000) { horizontalAdj -= 20; }
    else if (score >= 1000 && score < 10000) { horizontalAdj -= 30; }
    else if (score >= 10000) { horizontalAdj -= 40; }

    ctx.beginPath();
      ctx.fillStyle = Colors.textBlack;
      ctx.font = "18px serif";
    ctx.fillText(score, horizontalAdj, vPos);

    ctx.beginPath(); // border line between score and stats
      ctx.moveTo(7,vPos + 10);
      ctx.strokeStyle = Colors.borderGray;
      ctx.lineWidth = "2";
      ctx.lineTo(317,vPos + 10);
    ctx.stroke();
  }

  hatchRect (x1, y1, dx, dy, delta, color) {
    // source: https://codepen.io/adammertel/pen/xZyWxy
    // startX, Y, width, height, density-(lower val = more lines), color
    const ctx = this.ctx;

    ctx.rect(x1, y1, dx, dy);
    ctx.save();
    ctx.clip();

    const majorAxe = _.max([dx, dy]);
    ctx.strokeStyle = color;

    _.each(_.range(-1*(majorAxe) , majorAxe, delta), (n, i) => {
      ctx.beginPath();
      ctx.moveTo(n + x1, y1);
      ctx.lineTo(dy + n + x1 , y1 + dy);
      ctx.stroke();
    });

    ctx.restore();
  }

  statBar (key, pos, keyVals) {
    // Color[key] === hex_value
    const ctx = this.ctx;
    const width = 225;
    const height = 20;
    const x = pos[0] + 65; // relative to parent 'vPos'
    const y = pos[1] - 15;

    ctx.beginPath(); // background
      ctx.fillStyle="white";
    ctx.fillRect(x, y, width, height);
    // x, y, w, h

    this.hatchRect (x, y, keyVals[1], height, 5, Colors[key]);

    ctx.beginPath(); // min/current val
      ctx.fillStyle=Colors[key];
    ctx.fillRect(x, y, keyVals[0], height);

    ctx.beginPath(); // border on top of everything
      ctx.strokeStyle="black";
      ctx.lineWidth="1.5";
    ctx.strokeRect(x,y,width,height);

  }

  displayStats () {
    // this.statVals is a hash of matching k-v pairs
    // statVals = {
    //   Food = [current, max],
    //   ...
    // }
    const ctx = this.ctx;
    let vPos = 350;
    const adj = 27;
    const h = 20;

    const stats = {
      Food: [h, vPos],
      Health: [h, vPos += adj],
      Spirit: [h, vPos += adj],
      Strength: [h, vPos += adj],
      Agility: [h, vPos += adj],
      Intellect: [h, vPos += adj],
      Stamina: [h, vPos += adj],
    };

    for (let key in stats) {
      ctx.beginPath(); // stat text
        ctx.fillStyle = Colors.textBlack;
        ctx.font = "16px serif";
      ctx.fillText(key, stats[key][0], stats[key][1]);

      this.statBar(key, stats[key], this.statVals[key]); // actual bar
    }
  }

   draw () {
    const ctx = this.ctx;
    ctx.fillStyle = "#DFDFDF";
    ctx.fillRect(this.x, this.y, this.width, this.height);



    this.displayScore(314);
    this.displayStats();
  }
}
