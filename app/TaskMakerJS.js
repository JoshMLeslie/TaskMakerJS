import MainRender from './components/main_render';

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("myCanvas");
  const ctx = canvasEl.getContext("2d");

  const mainrender = new MainRender(canvasEl, ctx);

  mainrender.draw(); // kick it off

});

// runOnce( mainrender.draw, true, 10 );
// ( renderObj [, once?, interval if false] )

const runOnce = (callback, bool, time) => {
  if (bool) {
    console.log(
      "I'm not refreshing on purpose, see line:10");
    callback();
  } else {
    if (time > 10) {console.log("I'm rendering slowly on purpose");}
    setInterval( mainrender.draw, time );
  }
};
