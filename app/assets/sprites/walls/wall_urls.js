// alphabet
// stone_wall
// bush
// flowers
// left_arrow
// right_arrow
// magic_mouth
// rich_soil
// shrubs

export const alphabet = "app/assets/sprites/walls/alphabet.png";

export const brick = "app/assets/sprites/walls/brick.png";

export const bush = "app/assets/sprites/walls/bush.png";

export const flowers = "app/assets/sprites/walls/flowers.png";

export const left_arrow = "app/assets/sprites/walls/left_arrow.png";

export const right_arrow = "app/assets/sprites/walls/right_arrow.png";

export const magic_mouth = "app/assets/sprites/walls/magic_mouth.png";

export const rich_soil = "app/assets/sprites/walls/rich_soil.png";

export const shrubs = "app/assets/sprites/walls/shrubs.png";

export const stone_wall = "app/assets/sprites/walls/stone_wall.png";

export const posOf = (letter) => {
  // is this what staring into the abyss feels like?

  const position = 45;

  switch (letter) {
    case "A":
      return 0;
    // case "B":
    //   return position;
    case "C":
      return position*2;
    // case "D":
    //   return position*3;
    case "E":
      return position*4;
    // case "F":
    //   return position*5;
    // case "G":
    //   return position*6;
    // case "H":
    //   return position*7;
    case "I":
      return position*8;
    // case "J":
    //   return position*9;
    // case "K":
    //   return position*10;
    case "L":
      return position*11;
    case "M":
      return position*12;
    // case "N":
    //   return position*13;
    case "O":
      return position*14;
    // case "P":
    //   return position*15;
    // case "Q":
    //   return position*16;
    case "R":
      return position*17;
    // case "S":
    //   return position*18;
    case "T":
      return position*19;
    case "U":
      return position*20;
    // case "V":
    //   return position*21;
    case "W":
      return position*22;
    // case "X":
    //   return position*23;
    // case "Y":
    //   return position*24;
    // case "Z":
    //   return position*25;
    default:
      return console.log("no matching character in png");
  }
};
