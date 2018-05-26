export default class Sprite  {
  // https://github.com/jlongster/canvas-game-bootstrap/blob/a878158f39a91b19725f726675c752683c9e1c08/js/sprite.js

  constructor (ctx, image_url, x, y, width=45, height=45) {
    this.ctx = ctx;
    this.image =  new Image ();
    this.image.src = image_url;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.image.onload = () => {
      this.draw();
      // for illustration, but will need to look into making 'resources' actually work so I can call when I need to instead of instantly? Or load the whole level at once?
    };

    this.draw = this.draw.bind(this);
  }

  draw () {
    /* (
    image,
    sx, sy,
    sWidth, sHeight,
    dx, dy,
    dWidth, dHeight
    ) */
    this.ctx.drawImage(
      this.image,
        0, 0,
        35, 35,
        this.x, this.y,
        this.width, this.height
    );
  }
}
