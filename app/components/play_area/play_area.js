import * as levelOne from '../levels/levelOne';
import * as Colors from '../../util/font_colors';
import Sprite from '../../util/sprite';
import Resources from '../../util/load_resources';
import drawLevel from './draw_level';

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
        return drawLevel(
          this.ctx, level[room_key]
        ); // bubble up 'walls + entities'
      }
    }
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
