// from the top left, right, then down.

let topLeftX = 353;
let topLeftY = 88;
const stone_wall_url = "app/assets/sprites/walls/wall.png";

export const entryRoom = {
  walls: {
    one: {
      image_url: stone_wall_url,
      x: topLeftX,
      y: topLeftY
    },
    two: {
      image_url: stone_wall_url,
      x: topLeftX += 45,
      y: topLeftY
    },
  },

  floors: {

  }
};
