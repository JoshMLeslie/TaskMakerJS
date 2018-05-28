import * as Colors from '../../util/font_colors';
import drawTopBarContainer from './top_bar';
import drawPlayAreaContainer from './play_area';
import drawTextAndStatsContainer from './text_and_stats';
import buttonClick from './button_util';

export default class Background {
  constructor (name, canvasEl, ctx) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;
    this.name = name;
    this.width = canvasEl.width;  // max width the game occupies
    this.height = canvasEl.height; // borders etc should exist within this area

    this.callButtonClick = this.callButtonClick.bind(this);
    this.canvasEl.addEventListener('click', this.callButtonClick, false);
  }

  callButtonClick(e) {
    buttonClick(e, this.canvasEl);
  }

  draw () {
    const ctx = this.ctx;

    // black background
    ctx.beginPath();
    ctx.fillStyle = "#242424";
    ctx.fillRect(0, 0, 790, 530);

    drawTopBarContainer(ctx, this.name);
    drawPlayAreaContainer(ctx);
    drawTextAndStatsContainer(ctx);
  }
}
