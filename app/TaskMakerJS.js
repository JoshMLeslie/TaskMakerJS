import MainRender from './components/main_render';


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("myCanvas");
  const ctx = canvasEl.getContext("2d");

  const mainrender = new MainRender(canvasEl, ctx);

  runOnce(mainrender, true);
  // remove 'true' or set to false to run on setInterval
});

const runOnce = (mainrender, bool) => {
  if (bool) {
    console.log(
      "I'm not refreshing on purpose, see line:10");
    mainrender.draw();
  } else {
    setInterval( mainrender.draw, 10 );
  }
};
