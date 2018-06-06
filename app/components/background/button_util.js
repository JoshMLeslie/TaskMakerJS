const getMousePos = (e, canvasEl) =>  {
  let canvasArea = canvasEl.getBoundingClientRect();
  return {
    x: e.clientX - canvasArea.left,
    y: e.clientY - canvasArea.top
  };
};

const isInside = (pos, rect)  => {
  const posX = pos.x > rect.x;
  const widthX = pos.x < rect.x+rect.width;
  const widthY = pos.y < rect.y+rect.height;
  return posX && widthX && widthY;
};

const buttonClick = (e, canvasEl) =>  {
  // https://stackoverflow.com/questions/24384368/simple-button-in-html5-canvas
  const buttonArea = {
    x: 18,
    y: 8,
    width: 16,
    height: 16
  };
  const mousePos = getMousePos(e, canvasEl);

  if (isInside(mousePos, buttonArea)) {
    window.alert("You can't close me!");
  }
};

export default buttonClick;
