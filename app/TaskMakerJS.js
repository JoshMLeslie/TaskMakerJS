import MainRender from './components/main_render';
// import requestAnimFrame from './assets/animation_frame';

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("myCanvas");
  const ctx = canvasEl.getContext("2d");

  const mainrender = new MainRender(canvasEl, ctx);



  runOnce(mainrender, true, 10);
  // render, once?, interval
});

const runOnce = (mainrender, bool, time) => {
  if (bool) {
    console.log(
      "I'm not refreshing on purpose, see line:10");
    mainrender.draw();
  } else {
    if (time > 10) {console.log("I'm rendering slowly on purpose");}
    setInterval( mainrender.draw, time );
  }
};
