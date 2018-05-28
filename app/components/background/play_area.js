import * as Colors from '../../util/font_colors';

const drawCardinals = (ctx) => {
  // brace yourself.

  let vPos = 275;
  let vPos2 = 275; // since it gets called twice
  const vAdj = 15;

  const cardinals = {
    // keys are rendered relative to x,y vals.
    // N => "N" @ 555, 40, EAST => "E" @ ... "A" @ .... "S" ...
    N: [555, 70],
    EAST: {
      E: [766, vPos], // micro adjustments
      A: [765, vPos += vAdj],
      S: [766, vPos += vAdj],
      T: [766, vPos += vAdj],
    },
    SOUTH: [540, 512.5],
    WEST: {
      W: [333, vPos2],
      E: [335, vPos2 += vAdj],
      S: [335.5, vPos2 += vAdj],
      T: [335, vPos2 += vAdj]
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
} } } }; // cardinals() end


const drawPlayAreaContainer = (ctx) => {
  // playarea box

  ctx.beginPath();
    ctx.fillStyle = Colors.backgroundGray;
  ctx.fillRect(325, 65, 460, 460);
  // x, y, w, h

  ctx.beginPath(); // border
    ctx.strokeStyle=Colors.borderGray;
    ctx.lineWidth="2";
  ctx.strokeRect(328,68,454,454);

  ctx.beginPath(); // filled circle around 'N'
    ctx.fillStyle = Colors.backgroundGray;
    ctx.arc(561, 70, 30, 0, Math.PI*2);
    // x, y, radius, startAngle, endAngle, anticlockwiseBool
  ctx.fill();

  ctx.beginPath(); // border within circle to match
    ctx.fillStyle = Colors.borderGray;
    ctx.arc(561, 70, 28, Math.PI,0); // half-circle - passable.
  ctx.stroke();

  drawCardinals(ctx); // render lettering ontop of everything above
};

export default drawPlayAreaContainer;
