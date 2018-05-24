// import TextArea from './components/text_area/text_area';
import PlayArea from './play_area/play_area';
// import StatsArea from './components/stats_area/stats_area';

export default class MainRender {
  // renders the background and static containers

  constructor (canvasEl, ctx) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;

    this.canvasEl.width = 800;  // this is the max width the element occupies
    this.canvasEl.height = 500; // borders and stuff exist inside of this area
  }

  directions () {
    // brace yourself.
    const ctx = this.ctx;

    const cardinals = {
      N: [555, 40],
      EAST: {
        E: [768, 250],
        A: [767.5, 265],
        S: [769, 280],
        T: [768, 295],
      },
      SOUTH: [540, 482.5],
      WEST: {
        W: [331, 250],
        E: [333, 265],
        S: [333, 280],
        T: [332, 295]
      }
    };

    for (let key in cardinals) {
      ctx.beginPath();
      ctx.fillStyle = "gray";
      ctx.font = "12px serif";

      if (cardinals[key] instanceof Array) {
        if (key === "N") { ctx.font = "20px serif"; }

        ctx.fillText(key, cardinals[key][0], cardinals[key][1]);
      } else {
        for (let subkey in cardinals[key]) {
          ctx.fillText(
            subkey,
            cardinals[key][subkey][0],
            cardinals[key][subkey][1]
          );
        }
      }
    }
  }

  playAreaContainer () {
    const ctx = this.ctx;
    // playarea box

    ctx.beginPath();
      ctx.fillStyle = "#bebebe";
    ctx.fillRect(325, 35, 460, 460);
    // x, y, w, h

    ctx.beginPath();
      ctx.fillStyle = "#bebebe";
      ctx.arc(561, 40, 30, 0, Math.PI*2);
      // x, y, radius, startAngle, endAngle, anticlockwiseBool
    ctx.fill();

    this.directions();
  }

  textAndStatsContainer () {
    const ctx = this.ctx;
    ctx.beginPath();
      ctx.fillStyle = "#bebebe";
      ctx.fillRect(5, 5, 315, 490);

    ctx.beginPath(); // outer border
      ctx.strokeStyle="#adadad";
      ctx.lineWidth="2";
    ctx.strokeRect(6,6,313,488);

    ctx.beginPath(); // inner-outer border
      ctx.strokeStyle="#9b9b9b";
      ctx.lineWidth="2";
    ctx.strokeRect(8,8,309,484);


  }


  draw () {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);


    // whole render area
    ctx.beginPath();
    ctx.fillStyle = "#242424";
    ctx.fillRect(0, 0, 800, 500);

    this.playAreaContainer();
    this.textAndStatsContainer();


    // text, x, y

    const playarea = new PlayArea(this.canvasEl, this.ctx);
    return playarea.draw();
  }

}
