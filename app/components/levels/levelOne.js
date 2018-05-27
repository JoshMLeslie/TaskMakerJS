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

export const entryRoom = [
  { // 1st row
    image_url: stone_wall, type: 'wall', }, {
    image_url: alphabet, type: 'wall', srcX: posOf("T") }, {
    image_url: alphabet, type: 'wall', srcX: posOf("U") }, {
    image_url: alphabet, type: 'wall', srcX: posOf("T") }, {
    image_url: alphabet, type: 'wall', srcX: posOf("O") }, {
    image_url: alphabet, type: 'wall', srcX: posOf("R") }, {
    image_url: alphabet, type: 'wall', srcX: posOf("I") }, {
    image_url: alphabet, type: 'wall', srcX: posOf("A") }, {
    image_url: alphabet, type: 'wall', srcX: posOf("L")
  }, { // 2nd row
    image_url: stone_wall, type: 'wall' }, {
    image_url: bush }, {
    image_url: shrubs }, {
    image_url: flowers }, {
    image_url: flowers }, {
    image_url: flowers }, {
    image_url: shrubs }, {
    image_url: bush }, {
    image_url: stone_wall, type: 'wall',
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
    image_url: stone_wall, type: 'wall' }, {
    image_url: right_arrow, type: 'wall' }, {
    image_url: right_arrow, type: 'wall' }, {
    image_url: magic_mouth }, {
    image_url: left_arrow, type: 'wall' }, {
    image_url: left_arrow, type: 'wall' }, {
    image_url: stone_wall, type: 'wall' }, {
    image_url: alphabet, type: 'wall', srcX: posOf("E")
    }
]; // room end
