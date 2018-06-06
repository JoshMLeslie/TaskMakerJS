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

    this.levels = [];
    this.sprites = [];
    this.newSprites = true;
    this.loadLevels(); // manual input of levels

    this.renderedLevel = 0;
    this.renderedRoom = 0;
    this.currentLevel = 0;
    this.currentRoom = 0;

    this.updateRoom = this.updateRoom.bind(this);

    const centering = (canvasEl.height - this.height) / 2;
    this.x = canvasEl.width - this.width - centering + 30;
    this.y = canvasEl.height - this.height - centering + 25 ;

    this.bounds = {
      "00": [353, 88],
      "10":  [398, 88],
      "20":  [443, 88],
      "30":  [488, 88],
      "40":  [533, 88],
      "50":  [578, 88],
      "60":  [623, 88],
      "70":  [668, 88],
      "80":  [713, 88],
      "01":  [353, 133],
      "81":  [713, 133],
      "02":  [353, 178],
      "82":  [713, 178],
      "03":  [353, 223],
      "83":  [713, 223],
      "04":  [353, 268],
      "84":  [713, 268],
      "05":  [353, 313],
      "85":  [713, 313],
      "06":  [353, 358],
      "86":  [713, 358],
      "07":  [353, 403],
      "87":  [713, 403],
      "08":  [353, 448],
      "18":  [398, 448],
      "28":  [443, 448],
      "38":  [488, 448],
      "48":  [533, 448],
      "58":  [578, 448],
      "68":  [623, 448],
      "78":  [668, 448],
      "88":  [713, 448],
    };
  }

  makeLevels() {
    const level = this.thisLevel();
    const room_key = this.thisRoom();

    this.ensureDrawnIndices();
    return drawLevel(
        this.ctx,
        level[room_key],
        this.sprites,
        this.newSprites
    ); // bubble up 'walls + entities'
  }

  invertPos(charPos) {
    // basically same chunk as 'this.checkMoveRoom'
    let charPosKey = [];
    for (let key in this.bounds) {
      let bndPos = this.bounds[key];
      if (
        bndPos[0] === charPos[0] &&
        bndPos[1] === charPos[1]
      ) {
        charPosKey = key;
      }
    }

    let invertedPos;
    // won't play well with corners.
    // whiplash interpolation
    if ( charPosKey[0] == 0 ) {
      // flip across vertical L->R
      invertedPos = 8 + charPosKey[1];
    } else if (charPosKey[0] == 8) {
      // flip across vertical R->L
      invertedPos = 0 + charPosKey[1];
    } else if (charPosKey[1] == 0) {
      // else flip across horizon T->B
      invertedPos = charPosKey[0] + 8;
    } else if (charPosKey[1] == 8) {
      // else flip across horizon B->T
      invertedPos = charPosKey[0] + 0;
    }

    return this.bounds[invertedPos];
  }

  loadLevels () {
    // the term 'load' is loose here,
    // since this is a manual input
    this.levels = [
      levelOne
    ];
  }

  ensureDrawnIndices() {
      if (this.currentLevel !== this.renderedLevel) {
          this.renderedLevel = this.currentLevel;
      }

      if (this.currentRoom !== this.renderedRoom) {
          this.renderedRoom = this.currentRoom;
      }
  }

  thisLevel() {
    // id into obj
    return this.levels[this.currentLevel];
  }


  thisRoom() {
    // id into key
    return Object.keys(this.levels[this.currentLevel])[this.currentRoom];
  }

  checkSprites() {
      if (
          _.isEmpty(this.sprites) ||
          this.renderedLevel !== this.currentLevel ||
          this.renderedRoom !== this.currentRoom
      ) {
          this.newSprites = true;
      } else {
          this.newSprites = false;
      }
  }

  checkMoveRoom(char_pos) {
    for (let key in this.bounds) {
      if (
        this.bounds[key][0] === char_pos[0] &&
        this.bounds[key][1] === char_pos[1]
      ) {
        return true;
      }
    }
    return false;
  }

  updateRoom (char_dir) {
      // good enough for now.
      switch(char_dir) {
          case "up":
          if (this.currentRoom > 0) {
            this.currentRoom--;
          } else {
            this.currentRoom = 0;
          }
            break;
          case "down":
              this.currentRoom++;
              break;
      }
  }

  moveLevel(level) { // a bit of hard coding
    switch(level) {
      case "entryRoom":
        return 0;
      case "secondRoom":
        return 1;
      default:
        return 0;
    }
  }

  distributeEntities () {
    let allEntities = this.makeLevels();
    this.sprites = allEntities.sprites;
    return {
      walls: allEntities.walls,
      entities: allEntities.entities
    };
  }

  drawLevels () {
    this.sprites.forEach(sprite => { sprite.draw(); });
  }

  clearArea() {
    const ctx = this.ctx;
    ctx.clearRect(this.x, this.y, this.width, this.height);

    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.height, this.width);
  }

  draw () {
    this.clearArea();

    this.checkSprites();

    // bubble up 'walls', 'entities'
    const entities = this.distributeEntities();

    if (!this.newSprites) {
      this.drawLevels();
    }

    return entities;
  }
}
