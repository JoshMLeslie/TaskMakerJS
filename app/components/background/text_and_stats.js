import * as Colors from '../../util/font_colors';

const drawTextAndStatsContainer = (ctx) => {
  ctx.beginPath();
    ctx.fillStyle = Colors.backgroundGray; // hey bebebe
    ctx.fillRect(5, 35, 315, 490);

  ctx.beginPath(); // border
    ctx.strokeStyle = Colors.borderGray;
    ctx.lineWidth = "2";
  ctx.strokeRect(8,38,309,484);

  ctx.beginPath(); // border line between text and stats
    ctx.moveTo(9,292); // (-1, +2) adjustment for line overlap / thickness
    ctx.strokeStyle = Colors.borderGray;
    ctx.lineWidth = "2";
    ctx.lineTo(316,292);
  ctx.stroke();
};

export default drawTextAndStatsContainer;
