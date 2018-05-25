import MainRender from './components/main_render';


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("myCanvas");
  const ctx = canvasEl.getContext("2d");

  const mainrender = new MainRender(canvasEl, ctx);

  console.log("I'm not refreshing because setInterval is commented out");
  mainrender.draw();
  // setInterval( mainrender.draw, 10 );

});
