import * as wall_urls from '../../assets/sprites/walls/wall_urls';

// from the top left, right, then down.

const topLeftX = 353;
const topLeftY = 88;

const alphabet = wall_urls.alphabet;
const brick = wall_urls.brick;
const stone_wall = wall_urls.stone_wall;
const bush = wall_urls.bush;
const flowers = wall_urls.flowers;
const left_arrow = wall_urls.left_arrow;
const right_arrow = wall_urls.right_arrow;
const magic_mouth = wall_urls.magic_mouth;
const rich_soil = wall_urls.rich_soil;
const shrubs = wall_urls.shrubs;

const posOf = wall_urls.posOf;

export const entryRoom = {
  walls: [ {
      image_url: stone_wall, }, {
      image_url: alphabet, srcX: posOf("T") }, {
      image_url: alphabet, srcX: posOf("U") }, {
      image_url: alphabet, srcX: posOf("T") }, {
      image_url: alphabet, srcX: posOf("O") }, {
      image_url: alphabet, srcX: posOf("R") }, {
      image_url: alphabet, srcX: posOf("I") }, {
      image_url: alphabet, srcX: posOf("A") }, {
      image_url: alphabet, srcX: posOf("L")
    }, { // 2nd row
      image_url: stone_wall }, {
      image_url: bush }, {
      image_url: shrubs }, {
      image_url: flowers }, {
      image_url: flowers }, {
      image_url: flowers }, {
      image_url: shrubs }, {
      image_url: bush }, {
      image_url: stone_wall,
    }, { // 3rd row
      image_url: alphabet, srcX: posOf("W") }, {
      image_url: shrubs }, {
      image_url: rich_soil }, {
      image_url: rich_soil }, {
      image_url: rich_soil }, {
      image_url: rich_soil }, {
      image_url: rich_soil }, {
      image_url: shrubs }, {
      image_url: alphabet, srcX: posOf("W")
    }, { // 4th row
      image_url: alphabet, srcX: posOf("E") }, {
      image_url: flowers }, {
      image_url: rich_soil }, {
      image_url: brick }, {
      image_url: brick }, {
      image_url: brick }, {
      image_url: rich_soil }, {
      image_url: flowers }, {
      image_url: alphabet, srcX: posOf("E")
    }, { // 5th row
      image_url: alphabet, srcX: posOf("L") }, {
      image_url: flowers }, {
      image_url: rich_soil }, {
      image_url: brick }, {
      image_url: brick }, {
      image_url: brick }, {
      image_url: rich_soil }, {
      image_url: flowers }, {
      image_url: alphabet, srcX: posOf("L")
    }, { // 6th row
      image_url: alphabet, srcX: posOf("C") }, {
      image_url: flowers }, {
      image_url: rich_soil }, {
      image_url: brick }, {
      image_url: brick }, {
      image_url: brick }, {
      image_url: rich_soil }, {
      image_url: flowers }, {
      image_url: alphabet, srcX: posOf("C")
    }, { // 7th row
      image_url: alphabet, srcX: posOf("O") }, {
      image_url: shrubs }, {
      image_url: rich_soil }, {
      image_url: rich_soil }, {
      image_url: brick }, {
      image_url: rich_soil }, {
      image_url: rich_soil }, {
      image_url: shrubs }, {
      image_url: alphabet, srcX: posOf("O")
    }, { // 8th row
      image_url: alphabet, srcX: posOf("M") }, {
      image_url: bush }, {
      image_url: shrubs }, {
      image_url: rich_soil }, {
      image_url: brick }, {
      image_url: rich_soil }, {
      image_url: shrubs }, {
      image_url: bush }, {
      image_url: alphabet, srcX: posOf("M")
    }, { // 9th row
      image_url: alphabet, srcX: posOf("E") }, {
      image_url: stone_wall }, {
      image_url: right_arrow }, {
      image_url: right_arrow }, {
      image_url: magic_mouth }, {
      image_url: left_arrow }, {
      image_url: left_arrow }, {
      image_url: stone_wall }, {
      image_url: alphabet, srcX: posOf("E")
    }, // room end
  ],

  floors: [{

  }]
};
