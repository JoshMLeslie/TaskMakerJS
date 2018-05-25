import * as Colors from '../../assets/font_colors';

export default class Background {
  constructor (name, canvasEl, ctx) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;
    this.name = name;
    this.width = canvasEl.width;  // this is the max width the game occupies
    this.height = canvasEl.height; // borders and stuff exist inside of this area
  }

  drawTopBar () {
    const ctx = this.ctx;
    // for-now-fake top bar

    ctx.beginPath(); // bar background
      ctx.fillStyle = "#F8F8F5";
    ctx.fillRect(2, 2, 786, 30);

    ctx.beginPath(); // bottom border bar
      ctx.moveTo(2,32);
      ctx.strokeStyle = "#C0C0C0";
      ctx.lineWidth = "2";
      ctx.lineTo(788,32);
    ctx.stroke();

    for (let i = 6; i < 28; i += 4) {
      // horizontal striations
      ctx.beginPath();
        ctx.moveTo(4,i);
        ctx.strokeStyle = "#C0C0C0";
        ctx.lineWidth = "2";
        ctx.lineTo(786,i);
      ctx.stroke();
    }

    this.drawName();
    this.drawButton();
  }

  drawName () {
    const long = this.name.length;
    const width = (long * 8.5) + (long > 10 ? 0 : 10); // well enough.
    const centering = (790-width)/2;

    const ctx = this.ctx;
    ctx.beginPath();
      ctx.fillStyle = "#F8F8F5";
    ctx.fillRect(centering, 4, width, 24);

    ctx.beginPath(); // disp speaker
      ctx.fillStyle = Colors.textBlack;
      ctx.font = "20px serif";
    ctx.fillText(this.name, centering+5, 22.5); // +5 for padding
  }

  drawButton () {
    const ctx = this.ctx;

    ctx.beginPath(); // non-func click-box
      ctx.fillStyle = "#AEAEAE";
    ctx.fillRect(18, 8, 16, 16);

    ctx.beginPath(); // inner sq. border
      ctx.strokeStyle="#CFCDFF";
      ctx.lineWidth="2";
    ctx.strokeRect(18,8,18,18);

    ctx.beginPath(); // outer sq. border
      ctx.strokeStyle="#F8F8F5";
      ctx.lineWidth="2";
    ctx.strokeRect(14,4,24,24);

    ctx.beginPath(); // upper shadow border
      ctx.moveTo(15,6);
      ctx.strokeStyle = "#343169";
      ctx.lineWidth = "2";
      ctx.lineTo(37,6);
    ctx.stroke();

    ctx.beginPath(); // left shadow border
      ctx.moveTo(16,6);
      ctx.strokeStyle = "#343169";
      ctx.lineWidth = "2";
      ctx.lineTo(16,27);
    ctx.stroke();

    ctx.beginPath(); // lower shadow border
      ctx.moveTo(19,24);
      ctx.strokeStyle = "#343169";
      ctx.lineWidth = "2";
      ctx.lineTo(35,24);
    ctx.stroke();

    ctx.beginPath(); // right shadow border
      ctx.moveTo(34,9);
      ctx.strokeStyle = "#343169";
      ctx.lineWidth = "2";
      ctx.lineTo(34,25);
    ctx.stroke();
  }

  drawCardinals () {
    // brace yourself.
    const ctx = this.ctx;

    let vPos = 275;
    let vPos2 = 275; // since it gets called twice
    const vAdj = 15;

    const cardinals = {
      // keys are rendered relative to x,y vals.
      // N => "N" @ 555, 40, EAST => "E" @ ... "A" @ .... "S" ...
      N: [555, 70],
      EAST: {
        E: [768, vPos], // micro adjustments
        A: [767.5, vPos += vAdj],
        S: [769, vPos += vAdj],
        T: [768, vPos += vAdj],
      },
      SOUTH: [540, 512.5],
      WEST: {
        W: [331, vPos2],
        E: [333, vPos2 += vAdj],
        S: [333, vPos2 += vAdj],
        T: [332, vPos2 += vAdj]
      }
    };

    for (let key in cardinals) {
      ctx.beginPath();
      ctx.fillStyle = Colors.textGray;
      ctx.font = "12px serif";

      if (cardinals[key] instanceof Array) { // if first level is an array
        if (key === "N") { ctx.font = "20px serif"; }
        ctx.fillText(key, cardinals[key][0], cardinals[key][1]);
      } else { // else first level contains another object (E / W)
        for (let subkey in cardinals[key]) {
          ctx.fillText(
            subkey,
            cardinals[key][subkey][0],
            cardinals[key][subkey][1]
          );
  } } } } // cardinals() end


  drawPlayAreaContainer () {
    const ctx = this.ctx;
    // playarea box

    ctx.beginPath();
      ctx.fillStyle = Colors.backgroundGray;
    ctx.fillRect(325, 65, 460, 460);
    // x, y, w, h

    ctx.beginPath(); // border
      ctx.strokeStyle=Colors.borderGray;
      ctx.lineWidth="2";
    ctx.strokeRect(328,68,454,454);

    ctx.beginPath(); // filled circle around 'N'
      ctx.fillStyle = Colors.backgroundGray;
      ctx.arc(561, 70, 30, 0, Math.PI*2);
      // x, y, radius, startAngle, endAngle, anticlockwiseBool
    ctx.fill();

    ctx.beginPath(); // border within circle to match
      ctx.fillStyle = Colors.borderGray;
      ctx.arc(561, 70, 28, Math.PI,0); // half-circle - passable.
    ctx.stroke();

    this.drawCardinals(); // render lettering ontop of everything above
  }

  drawTextAndStatsContainer () {
    const ctx = this.ctx;

    ctx.beginPath();
      ctx.fillStyle = Colors.backgroundGray; // hey bebebe
      ctx.fillRect(5, 35, 315, 490);

    ctx.beginPath(); // border
      ctx.strokeStyle = Colors.borderGray;
      ctx.lineWidth = "2";
    ctx.strokeRect(8,38,309,484);

    ctx.beginPath(); // border line between text and stats
      ctx.moveTo(9,292); // (-1, +2) adjustment for line overlap / thickness
      ctx.strokeStyle = Colors.borderGray;
      ctx.lineWidth = "2";
      ctx.lineTo(316,292);
    ctx.stroke();
  }

  draw () {
    const ctx = this.ctx;
    // background render area

    ctx.beginPath();
    ctx.fillStyle = "#242424"; // background black
    ctx.fillRect(0, 0, 790, 530);

    this.drawTopBar();

    this.drawPlayAreaContainer();
    this.drawTextAndStatsContainer();
  }
}
