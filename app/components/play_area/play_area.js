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

    this.levels = {};
    this.sprites = [];
    this.newSprites = true;

    const centering = (canvasEl.height - this.height) / 2;
    this.x = canvasEl.width - this.width - centering + 30;
    this.y = canvasEl.height - this.height - centering + 25 ;
  }

  makeLevels(levels) {
    for (let level_key in levels) {
      const level = levels[level_key];

      for (let room_key in level) {
        return drawLevel(
          this.ctx, level[room_key], this.sprites
        ); // bubble up 'walls + entities'
      }
    }
  }

  distributeEntities (levels) {
    let allEntities = this.makeLevels(levels);
    this.sprites = allEntities.sprites;
    return {
      walls: allEntities.walls,
      entities: allEntities.entities
    };
  }

  drawLevels () {
    this.sprites.forEach(sprite => { sprite.draw(); });
  }

  draw () {
    const ctx = this.ctx;

    ctx.clearRect(this.x, this.y, this.width, this.height);

    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.height, this.width);

    if (_.isEmpty(this.sprites) ) {
      this.newSprites = true;
    } else {
      this.newSprites = false;
    }

    const entities = this.distributeEntities({
      // bubble up 'walls', 'entities'
      levelOne
    });

    if (!this.newSprites) {
      this.drawLevels();
    }

    return entities;
  }
}
