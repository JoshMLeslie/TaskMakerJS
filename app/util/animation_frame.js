// currently broken
const requestAnimFrame = (callback) => (
  // https://github.com/jlongster/canvas-game-bootstrap/blob/a878158f39a91b19725f726675c752683c9e1c08/js/app.js
  // try something better, else fallback to bedrock

  window.requestAnimationFrame       ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  window.oRequestAnimationFrame      ||
  window.msRequestAnimationFrame     ||
  function(callback){
      window.setTimeout(callback, 1000 / 60);
  }
);

export default requestAnimFrame;
