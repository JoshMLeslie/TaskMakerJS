import TextArea from './text_area/text_area';
import PlayArea from './play_area/play_area';
import StatsArea from './stats_area/stats_area';
import Character from './character/character';

import * as Colors from '../assets/font_colors';

export default class MainRender {

  // renders the background and static containers

  constructor (canvasEl, ctx) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;

    this.canvasEl.width = 790;  // this is the max width the game occupies
    this.canvasEl.height = 500; // borders and stuff exist inside of this area


  }

  drawBackground () {
    const ctx = this.ctx;
  // background render area
    ctx.beginPath();
    ctx.fillStyle = "#242424";
    ctx.fillRect(0, 0, 790, 500);

    this.playAreaContainer();
    this.textAndStatsContainer();
  }

  directions () {
    // brace yourself.
    const ctx = this.ctx;

    let vPos = 245;
    let vPos2 = 245; // since it gets called twice
    const vAdj = 15;

    const cardinals = {
      // keys are rendered relative to x,y vals.
      // N => "N" @ 555, 40, EAST => "E" @ ... "A" @ .... "S" ...
      N: [555, 40],
      EAST: {
        E: [768, vPos], // micro adjustments
        A: [767.5, vPos += vAdj],
        S: [769, vPos += vAdj],
        T: [768, vPos += vAdj],
      },
      SOUTH: [540, 482.5],
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
  } } } }

  playAreaContainer () {
    const ctx = this.ctx;
    // playarea box

    ctx.beginPath();
      ctx.fillStyle = Colors.backgroundGray;
    ctx.fillRect(325, 35, 460, 460);
    // x, y, w, h

    ctx.beginPath(); // border
      ctx.strokeStyle=Colors.borderGray;
      ctx.lineWidth="2";
    ctx.strokeRect(328,38,454,454);

    ctx.beginPath(); // filled circle around 'N'
      ctx.fillStyle = Colors.backgroundGray;
      ctx.arc(561, 40, 30, 0, Math.PI*2);
      // x, y, radius, startAngle, endAngle, anticlockwiseBool
    ctx.fill();

    ctx.beginPath(); // border within circle to match
      ctx.fillStyle = Colors.borderGray;
      ctx.arc(561, 40, 28, Math.PI,0); // half-circle - passable.
    ctx.stroke();

    this.directions(); // render lettering ontop of everything above
  }

  textAndStatsContainer () {
    const ctx = this.ctx;

    ctx.beginPath();
      ctx.fillStyle = Colors.backgroundGray; // hey bebebe
      ctx.fillRect(5, 5, 315, 490);

    ctx.beginPath(); // border
      ctx.strokeStyle = Colors.borderGray;
      ctx.lineWidth = "2";
    ctx.strokeRect(8,8,309,484);

    ctx.beginPath(); // border line between text and stats
      ctx.moveTo(9,262); // (-1, +2) adjustment for line overlap / thickness
      ctx.strokeStyle = Colors.borderGray;
      ctx.lineWidth = "2";
      ctx.lineTo(316,262);
    ctx.stroke();
  }


  draw () {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);

    this.drawBackground();

    // modules
    const playarea = new PlayArea(this.canvasEl, this.ctx);
    const textarea = new TextArea(this.canvasEl, this.ctx);
    const statsarea = new StatsArea(this.canvasEl, this.ctx);
    const character = new Character(this.canvasEl, this.ctx);

    textarea.draw();

    textarea.displayText("Magic Mouth", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis gravida commodo. Vestibulum vel velit eget est pretium eleifend. Nulla ex ex, semper sit amet commodo at, tincidunt nec erat.");

    playarea.draw();
    statsarea.draw();
    character.draw();
  }

}

// textarea.displayText("Magic Mouth", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis gravida commodo. Vestibulum vel velit eget est pretium eleifend. Nulla ex ex, semper sit amet commodo at, tincidunt nec erat. Pellentesque id justo consectetur, posuere est eu, pulvinar ipsum. Praesent rutrum malesuada lacus quis bibendum. Suspendisse sed est luctus mi commodo luctus. Vestibulum ipsum sem, imperdiet at purus vehicula, commodo porttitor enim. Ut id sem nunc. Duis sollicitudin purus sagittis, consequat enim dignissim, pretium eros. Aenean nisi purus, bibendum vel pretium eget, varius id turpis. Etiam eu quam a nisl lobortis egestas nec id felis. Mauris vitae finibus eros. Duis viverra blandit nibh, a fringilla justo ultricies ac.");
