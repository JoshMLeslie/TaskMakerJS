import MainRender from './components/main_render';


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("myCanvas");
  const ctx = canvasEl.getContext("2d");

  let mainrender = new MainRender(canvasEl, ctx);
  setInterval( mainrender.draw(), 10 );

});
