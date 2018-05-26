import * as Colors from '../../util/font_colors';

export default class TextArea {
  constructor (canvasEl, ctx) {
    this.ctx = ctx;
    this.width = 305;
    this.height = 250;

    this.currentText = [];

    this.x = 10;
    this.y = 40;
  }

  parseText(text) {
    // parses a string into chunks of 44 characters:
    // max width of disp @ font = 16px

    // improve to only break on white space nearest 44
    let result = [];
    for (let i = 0; i < Math.ceil(text.length/44); i++) {
      let start = i * 44;
      let end = (i + 1) * 44;
      result.push(text.slice(start,end) );
    }
  return result;
  }


  displayText(speaker, text) {
    let parsedText = this.parseText(text);

    const ctx = this.ctx;
    // this.currentText.push([speaker,text]);
    let start = 60;
    // needs to be adjusted based on collective displayed text.
    // or just render one chunk of text at a time, sounds easier for now than keeping track of it all.

    ctx.beginPath(); // disp speaker
      ctx.fillStyle = Colors.textBlack;
      ctx.font = "16px serif";
    ctx.fillText(speaker, 15, start);

    start += 10; // bump down.
    parsedText.forEach(text => {
      ctx.beginPath(); // disp speaker
      ctx.fillStyle = Colors.textBlack;
      ctx.font = "16px serif";
      ctx.fillText(text, 15, start+=15);
    });
  }

   draw () {
    this.ctx.fillStyle = "#FFFFCF";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);


    // this.displayText("Magic Mouth", "Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?.");
  }
}
