import requestAnimFrame from '../util/animation_frame';
import {upgradeText, findObjByKey} from '../util/util_fns';
import Background from './background/background';
import TextArea from './text_area/text_area';
import PlayArea from './play_area/play_area';
import StatsArea from './stats_area/stats_area';
import Character from './character/character';

import * as Colors from '../util/font_colors';

export default class MainRender {

  // renders the background and static containers

  constructor (canvasEl, ctx) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;

    // init def for the max space the game occupies
    this.canvasEl.width = 790;
    this.canvasEl.height = 530;

    this.walls = {};
    this.entities = {};
    // oh, you'll see. I hate this. This is why State exists.
    this.magic_mouths = {};

    let name = "Josh";
    // eventually replace with input from a login screen.

    this.background = new Background(name, canvasEl, ctx);
    this.playarea = new PlayArea(canvasEl, ctx);
    this.textarea = new TextArea(canvasEl, ctx);
    this.statsarea = new StatsArea(canvasEl, ctx);
    this.character = new Character(canvasEl, ctx);

    this.draw = this.draw.bind(this);
    this.run = this.run.bind(this);
    this.inputSelector = this.inputSelector.bind(this);
    this.drawPlayArea = this.drawPlayArea.bind(this);

    // inputSelector needs to be bound first.
    window.addEventListener("keydown", this.run);

    this.text_obj = {
      speaker: "Bob:",
      body: "HELP! I'm trapped in this box! For now at least I can move with 'arrow keys' and examine my surroundings with 'e'. That's something, I suppose."
    };
  }


// UTILITY //
  inputSelector (e) {
    switch (e.keyCode) {
      case 37: case 38: case 39: case 40: // l, u, d, r ?
        let char = this.character;
        this.statsarea.updateStat("Stamina", -0.5);
        char.move(e.keyCode, this.walls);
        // this.walls? madness. MADNESS. Forward the foundation!



        // if (
        //   char.position[0] === someX,
        //   char.position[1] === someY
        // ) { speakTheMagicMouth(); }

        return 'character'; // prevent reloading from unbound keys

      case 65: // 'a' - action, drains stamina
        this.statsarea.updateStat("Stamina", -1);
        return 'stats';

      case 69: // 'e' - examine
        let pos = this.character.positionAhead();
        this.examineEntity(pos);
        return 'idle'; // hits default draw

      case 82: // 'r' - rest // replenishes stamina
        this.statsarea.updateStat("Stamina", "max");
        return 'stats';

      default:
        let text =
        this.text_obj = { // is this even necessary?
          speaker: 'Game', body: `${e.key} is not used!`
        };
        this.sendText();

        return 'idle';
    }
  }

//   onMagicMouth() {
// this.magicMouths = findObjByKey
//   }

  sendText() {
    this.textarea.draw();
    this.textarea.displayText(this.text_obj);
  }

  examineEntity(pos) {
    let toggled = false;

    for (let idx in this.entities) {
      let ent = this.entities[idx];

      if (
        ent.pos[0] === pos[0] &&
        ent.pos[1] === pos[1]
      ) {
        const ent_text = upgradeText(ent.type);
        toggled = true; // because looping
        this.text_obj = {
          speaker: 'Examine:', body: `That's ${ent_text}!`
        };
      }
    }

    if (!toggled) {
      this.text_obj = {
        speaker: "Examine:", body: "That's the abyss!"
      };
    }

    this.sendText();
  }
  // \\ //

  // RENDERING //
  drawPlayArea() {
    let temp = this.playarea.draw();
    this.walls = temp.walls;
    this.entities = temp.entities;
  }

  draw () {
    const ctx = this.ctx;

    ctx.clearRect(
      0, 0,
      this.canvasEl.width,
      this.canvasEl.height
    );

    // modules
    this.background.draw();
    this.sendText();

    this.statsarea.draw();

    // 'walls' bubbled up from within pa.draw
    this.drawPlayArea();

    this.character.draw();
  }

  run (e) {
    switch ( this.inputSelector(e) ) {
      case 'character':
        this.statsarea.draw();
        this.drawPlayArea();
        this.character.draw();
        break;
      case 'stats':
        this.statsarea.draw();
        break;
      case 'idle':
        break;
      default:
        this.draw();
    }
  }

} // class end

// textarea.displayText("Magic Mouth", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis gravida commodo. Vestibulum vel velit eget est pretium eleifend. Nulla ex ex, semper sit amet commodo at, tincidunt nec erat. Pellentesque id justo consectetur, posuere est eu, pulvinar ipsum. Praesent rutrum malesuada lacus quis bibendum. Suspendisse sed est luctus mi commodo luctus. Vestibulum ipsum sem, imperdiet at purus vehicula, commodo porttitor enim. Ut id sem nunc. Duis sollicitudin purus sagittis, consequat enim dignissim, pretium eros. Aenean nisi purus, bibendum vel pretium eget, varius id turpis. Etiam eu quam a nisl lobortis egestas nec id felis. Mauris vitae finibus eros. Duis viverra blandit nibh, a fringilla justo ultricies ac.");
