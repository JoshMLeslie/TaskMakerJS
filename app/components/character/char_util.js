export const diffAhead = (direction) => {
  switch(direction) {
    case "left":
      return [-45, 0];
    case "up":
      return [0, -45];
    case "right":
      return [45, 0];
    case "down":
      return [0, 45];
    default:
      return [0,0];
  }
};

const mapKeyToDir = (key) => {
  switch (key){
    case 37:
      return "left";
    case 38:
      return "up";
    case 39:
      return "right";
    case 40:
      return "down";
    default:
      return [0,0];
  }
};

const isFacing = (current_dir, dir) => {
    // used for turning, then moving
  if (current_dir !== dir) {
    // dir = "up", etc.
    return dir;
  } else {
    return diffAhead(dir); // returns [x,y]
  }
};

export const makeAmove = (current_dir, key) => {
  // 37, left // 38, up // 39, right // 40, down
  let dir = mapKeyToDir(key);
  return isFacing(current_dir, dir);
};

export const checkWallCollision = (moveToX, moveToY, walls) => {
  for (let idx in walls) {
    let wallPos = walls[idx];
    if (wallPos[0] === moveToX && wallPos[1] === moveToY) {
      return false;
    }
  }
  return true;
};

export const checkPlayAreaCollision = (moveToX, moveToY) => { // hard coded maximum bounds
  return (moveToX > 345 && moveToX < 750 ) && (moveToY > 80 && moveToY < 485);
};
