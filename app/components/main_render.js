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

    this.canvasEl.width = 790;  // this is the max width the game occupies
    this.canvasEl.height = 530;

    let name = "Josh"; // eventually replace with input from a login screen.

    this.background = new Background(name, canvasEl, ctx);
    this.playarea = new PlayArea(canvasEl, ctx);
    this.textarea = new TextArea(canvasEl, ctx);
    this.statsarea = new StatsArea(canvasEl, ctx);
    this.character = new Character(canvasEl, ctx);

    this.draw = this.draw.bind(this);
    this.inputSelector = this.inputSelector.bind(this);

    // inputSelector needs to be bound first.
    window.addEventListener("keydown", this.inputSelector);
  }

  inputSelector (e) {
    switch (e.keyCode) {
      case 37: case 38: case 39: case 40:
        this.character.move(e.keyCode);
        break;
      case 65:
        window.alert("action!");
        break;
      case 69:
        window.alert("examine!");
        break;
      // default:
      //   window.alert(`${e.key} is not bound`);
    }
  }



  draw () {
    const ctx = this.ctx;

    ctx.clearRect(0, 0, 790, 530);

    // modules
    this.background.draw();
    this.textarea.draw();
    
    this.textarea.displayText("Magic Mouth", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis gravida commodo. Vestibulum vel velit eget est pretium eleifend. Nulla ex ex, semper sit amet commodo at, tincidunt nec erat.");

    this.playarea.draw();
    this.statsarea.draw();
    this.character.draw();
  }

}

// textarea.displayText("Magic Mouth", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis gravida commodo. Vestibulum vel velit eget est pretium eleifend. Nulla ex ex, semper sit amet commodo at, tincidunt nec erat. Pellentesque id justo consectetur, posuere est eu, pulvinar ipsum. Praesent rutrum malesuada lacus quis bibendum. Suspendisse sed est luctus mi commodo luctus. Vestibulum ipsum sem, imperdiet at purus vehicula, commodo porttitor enim. Ut id sem nunc. Duis sollicitudin purus sagittis, consequat enim dignissim, pretium eros. Aenean nisi purus, bibendum vel pretium eget, varius id turpis. Etiam eu quam a nisl lobortis egestas nec id felis. Mauris vitae finibus eros. Duis viverra blandit nibh, a fringilla justo ultricies ac.");
