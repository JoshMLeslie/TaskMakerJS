import * as Colors from '../../util/font_colors';

const drawTopBar = (ctx, name) => {
  // for-now-fake top bar

  ctx.beginPath(); // bar background
    ctx.fillStyle = "#F8F8F5";
  ctx.fillRect(2, 2, 786, 30);

  ctx.beginPath(); // bottom border bar
    ctx.moveTo(2,31);
    ctx.strokeStyle = "#C0C0C0";
    ctx.lineWidth = "2";
    ctx.lineTo(788,31);
  ctx.stroke();

  for (let i = 6; i < 28; i += 4) {
    // horizontal striations
    ctx.beginPath();
      ctx.moveTo(4,i);
      ctx.strokeStyle = "#C0C0C0";
      ctx.lineWidth = "2";
      ctx.lineTo(786,i);
    ctx.stroke();
  }

  drawName(ctx, name);
  drawButton(ctx);
};

const drawName = (ctx, name) => {
  const long = name.length;
  const width = (long * 8.5) + (long > 10 ? 0 : 10); // well enough.
  const centering = (790-width)/2;

  ctx.beginPath();
    ctx.fillStyle = "#F8F8F5";
  ctx.fillRect(centering, 4, width, 24);

  ctx.beginPath(); // disp speaker
    ctx.fillStyle = Colors.textBlack;
    ctx.font = "20px serif";
  ctx.fillText(name, centering+5, 22.5); // +5 for padding
};

const drawButton = (ctx) => {
  ctx.beginPath(); // non-func click-box
    ctx.fillStyle = "#AEAEAE";
  ctx.fillRect(18, 8, 16, 16);

  ctx.beginPath(); // inner sq. border
    ctx.strokeStyle="#CFCDFF";
    ctx.lineWidth="2";
  ctx.strokeRect(18,8,18,18);

  ctx.beginPath(); // outer sq. border
    ctx.strokeStyle="#F8F8F5";
    ctx.lineWidth="2";
  ctx.strokeRect(14,4,24,24);

  ctx.beginPath(); // upper shadow border
    ctx.moveTo(15,6);
    ctx.strokeStyle = "#343169";
    ctx.lineWidth = "2";
    ctx.lineTo(37,6);
  ctx.stroke();

  ctx.beginPath(); // left shadow border
    ctx.moveTo(16,6);
    ctx.strokeStyle = "#343169";
    ctx.lineWidth = "2";
    ctx.lineTo(16,27);
  ctx.stroke();

  ctx.beginPath(); // lower shadow border
    ctx.moveTo(19,24);
    ctx.strokeStyle = "#343169";
    ctx.lineWidth = "2";
    ctx.lineTo(35,24);
  ctx.stroke();

  ctx.beginPath(); // right shadow border
    ctx.moveTo(34,9);
    ctx.strokeStyle = "#343169";
    ctx.lineWidth = "2";
    ctx.lineTo(34,25);
  ctx.stroke();
};

export default drawTopBar;
