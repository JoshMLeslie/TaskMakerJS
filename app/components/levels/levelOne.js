import * as urls from '../../assets/sprites/walls/urls';

// from the top left, right, then down.

const topLeftX = 353;
const topLeftY = 88;

const alphabet = urls.alphabet;
const brick = urls.brick;
const stone_wall = urls.stone_wall;
const bush = urls.bush;
const flowers = urls.flowers;
const left_arrow = urls.left_arrow;
const right_arrow = urls.right_arrow;
const magic_mouth = urls.magic_mouth;
const rich_soil = urls.rich_soil;
const shrubs = urls.shrubs;

const posOf = urls.posOf;
// a fn for finding an alphabet ch

const entryRoomExitMouth = "Welcome! I hope you've enjoyed this tutorial so far. As a reminder, examine with 'e'! Actions can be performed with 'a', but there's nothing to activate yet. Rest with 'r' to restore your stamina!";

export const entryRoom = [
  // 1st row
  { image_url: stone_wall }, {
    image_url: alphabet, type: 'wall', srcX: posOf("T") }, {
    image_url: alphabet, type: 'wall', srcX: posOf("U") }, {
    image_url: alphabet, type: 'wall', srcX: posOf("T") }, {
    image_url: alphabet, type: 'wall', srcX: posOf("O") }, {
    image_url: alphabet, type: 'wall', srcX: posOf("R") }, {
    image_url: alphabet, type: 'wall', srcX: posOf("I") }, {
    image_url: alphabet, type: 'wall', srcX: posOf("A") }, {
    image_url: alphabet, type: 'wall', srcX: posOf("L")
  }, { // 2nd row
    image_url: stone_wall }, {
    image_url: bush }, {
    image_url: shrubs }, {
    image_url: flowers }, {
    image_url: flowers }, {
    image_url: flowers }, {
    image_url: shrubs }, {
    image_url: bush }, {
    image_url: stone_wall
  }, { // 3rd row
    image_url: alphabet, type: 'wall', srcX: posOf("W") }, {
    image_url: shrubs }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: shrubs }, {
    image_url: alphabet, type: 'wall', srcX: posOf("W")
  }, { // 4th row
    image_url: alphabet, type: 'wall', srcX: posOf("E") }, {
    image_url: flowers }, {
    image_url: rich_soil }, {
    image_url: brick }, {
    image_url: brick }, {
    image_url: brick }, {
    image_url: rich_soil }, {
    image_url: flowers }, {
    image_url: alphabet, type: 'wall', srcX: posOf("E")
  }, { // 5th row
    image_url: alphabet, type: 'wall', srcX: posOf("L") }, {
    image_url: flowers }, {
    image_url: rich_soil }, {
    image_url: brick }, {
    image_url: brick }, {
    image_url: brick }, {
    image_url: rich_soil }, {
    image_url: flowers }, {
    image_url: alphabet, type: 'wall', srcX: posOf("L")
  }, { // 6th row
    image_url: alphabet, type: 'wall', srcX: posOf("C") }, {
    image_url: flowers }, {
    image_url: rich_soil }, {
    image_url: brick }, {
    image_url: brick }, {
    image_url: brick }, {
    image_url: rich_soil }, {
    image_url: flowers }, {
    image_url: alphabet, type: 'wall', srcX: posOf("C")
  }, { // 7th row
    image_url: alphabet, type: 'wall', srcX: posOf("O") }, {
    image_url: shrubs }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: brick }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: shrubs }, {
    image_url: alphabet, type: 'wall', srcX: posOf("O")
  }, { // 8th row
    image_url: alphabet, type: 'wall', srcX: posOf("M") }, {
    image_url: bush }, {
    image_url: shrubs }, {
    image_url: rich_soil }, {
    image_url: brick }, {
    image_url: rich_soil }, {
    image_url: shrubs }, {
    image_url: bush }, {
    image_url: alphabet, type: 'wall', srcX: posOf("M")
  }, { // 9th row
    image_url: alphabet, type: 'wall', srcX: posOf("E") }, {
    image_url: stone_wall }, {
    image_url: right_arrow, type: 'wall' }, {
    image_url: right_arrow, type: 'wall' }, {
    image_url: magic_mouth, type: "mouth", text: entryRoomExitMouth }, {
    image_url: left_arrow, type: 'wall' }, {
    image_url: left_arrow, type: 'wall' }, {
    image_url: stone_wall }, {
    image_url: alphabet, type: 'wall', srcX: posOf("E")
  }
]; // room end

export const secondRoom = [
  // 1st row
  { image_url: stone_wall }, {
    image_url: stone_wall }, {
    image_url: stone_wall }, {
    image_url: stone_wall }, {
    image_url: brick }, {
    image_url: stone_wall }, {
    image_url: stone_wall }, {
    image_url: stone_wall }, {
    image_url: stone_wall
  }, { // 2nd row
    image_url: alphabet, type: 'wall', srcX: posOf("W") }, {
    image_url: bush }, {
    image_url: shrubs }, {
    image_url: flowers }, {
    image_url: brick }, {
    image_url: flowers }, {
    image_url: shrubs }, {
    image_url: bush }, {
    image_url: alphabet, type: 'wall', srcX: posOf("W") }, { // 3rd row
    image_url: alphabet, type: 'wall', srcX: posOf("E") }, {
    image_url: shrubs }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: brick }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: shrubs }, {
    image_url: alphabet, type: 'wall', srcX: posOf("E")
  }, { // 4th row
    image_url: alphabet, type: 'wall', srcX: posOf("L") }, {
    image_url: flowers }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: brick }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: flowers }, {
    image_url: alphabet, type: 'wall', srcX: posOf("L")
  }, { // 5th row
    image_url: alphabet, type: 'wall', srcX: posOf("C") }, {
    image_url: flowers }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: brick }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: flowers }, {
    image_url: alphabet, type: 'wall', srcX: posOf("C")
  }, { // 6th row
    image_url: alphabet, type: 'wall', srcX: posOf("O") }, {
    image_url: flowers }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: brick }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: flowers }, {
    image_url: alphabet, type: 'wall', srcX: posOf("O")
  }, { // 7th row
    image_url: alphabet, type: 'wall', srcX: posOf("M") }, {
    image_url: shrubs }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: brick }, {
    image_url: rich_soil }, {
    image_url: rich_soil }, {
    image_url: shrubs }, {
    image_url: alphabet, type: 'wall', srcX: posOf("M")
  }, { // 8th row
    image_url: alphabet, type: 'wall', srcX: posOf("E") }, {
    image_url: bush }, {
    image_url: shrubs }, {
    image_url: rich_soil }, {
    image_url: brick }, {
    image_url: rich_soil }, {
    image_url: shrubs }, {
    image_url: bush }, {
    image_url: alphabet, type: 'wall', srcX: posOf("E")
  }, { // 9th row
    image_url: stone_wall }, {
    image_url: stone_wall }, {
    image_url: stone_wall }, {
    image_url: stone_wall }, {
    image_url: stone_wall }, {
    image_url: stone_wall }, {
    image_url: stone_wall }, {
    image_url: stone_wall }, {
    image_url: stone_wall
  }
]; // room end
