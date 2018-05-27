/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/TaskMakerJS.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/TaskMakerJS.js":
/*!****************************!*\
  !*** ./app/TaskMakerJS.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main_render = __webpack_require__(/*! ./components/main_render */ "./app/components/main_render.js");

var _main_render2 = _interopRequireDefault(_main_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementById("myCanvas");
  var ctx = canvasEl.getContext("2d");

  var mainrender = new _main_render2.default(canvasEl, ctx);

  mainrender.draw(); // kick it off
});

// runOnce( mainrender.draw, true, 10 );
// ( renderObj [, once?, interval if false] )

var runOnce = function runOnce(callback, bool, time) {
  if (bool) {
    console.log("I'm not refreshing on purpose, see line:10");
    callback();
  } else {
    if (time > 10) {
      console.log("I'm rendering slowly on purpose");
    }
    setInterval(mainrender.draw, time);
  }
};

/***/ }),

/***/ "./app/assets/sprites/walls/urls.js":
/*!******************************************!*\
  !*** ./app/assets/sprites/walls/urls.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// alphabet
// stone_wall
// bush
// flowers
// left_arrow
// right_arrow
// magic_mouth
// rich_soil
// shrubs

var alphabet = exports.alphabet = "app/assets/sprites/walls/alphabet.png";

var brick = exports.brick = "app/assets/sprites/walls/brick.png";

var bush = exports.bush = "app/assets/sprites/walls/bush.png";

var flowers = exports.flowers = "app/assets/sprites/walls/flowers.png";

var left_arrow = exports.left_arrow = "app/assets/sprites/walls/left_arrow.png";

var right_arrow = exports.right_arrow = "app/assets/sprites/walls/right_arrow.png";

var magic_mouth = exports.magic_mouth = "app/assets/sprites/walls/magic_mouth.png";

var rich_soil = exports.rich_soil = "app/assets/sprites/walls/rich_soil.png";

var shrubs = exports.shrubs = "app/assets/sprites/walls/shrubs.png";

var stone_wall = exports.stone_wall = "app/assets/sprites/walls/stone_wall.png";

var posOf = exports.posOf = function posOf(letter) {
  // is this what staring into the abyss feels like?

  var position = 45;

  switch (letter) {
    case "A":
      return 0;
    // case "B":
    //   return position;
    case "C":
      return position * 2;
    // case "D":
    //   return position*3;
    case "E":
      return position * 4;
    // case "F":
    //   return position*5;
    // case "G":
    //   return position*6;
    // case "H":
    //   return position*7;
    case "I":
      return position * 8;
    // case "J":
    //   return position*9;
    // case "K":
    //   return position*10;
    case "L":
      return position * 11;
    case "M":
      return position * 12;
    // case "N":
    //   return position*13;
    case "O":
      return position * 14;
    // case "P":
    //   return position*15;
    // case "Q":
    //   return position*16;
    case "R":
      return position * 17;
    // case "S":
    //   return position*18;
    case "T":
      return position * 19;
    case "U":
      return position * 20;
    // case "V":
    //   return position*21;
    case "W":
      return position * 22;
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

/***/ }),

/***/ "./app/components/background/background.js":
/*!*************************************************!*\
  !*** ./app/components/background/background.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _font_colors = __webpack_require__(/*! ../../util/font_colors */ "./app/util/font_colors.js");

var Colors = _interopRequireWildcard(_font_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Background = function () {
  function Background(name, canvasEl, ctx) {
    _classCallCheck(this, Background);

    this.canvasEl = canvasEl;
    this.ctx = ctx;
    this.name = name;
    this.width = canvasEl.width; // max width the game occupies
    this.height = canvasEl.height; // borders etc should exist within this area

    this.buttonClick = this.buttonClick.bind(this);
    this.canvasEl.addEventListener('click', this.buttonClick, false);
  }

  _createClass(Background, [{
    key: 'getMousePos',
    value: function getMousePos(e) {
      var canvasArea = this.canvasEl.getBoundingClientRect();
      return {
        x: e.clientX - canvasArea.left,
        y: e.clientY - canvasArea.top
      };
    }
  }, {
    key: 'isInside',
    value: function isInside(pos, rect) {
      var posX = pos.x > rect.x;
      var widthX = pos.x < rect.x + rect.width;
      var widthY = pos.y < rect.y + rect.height;
      return posX && widthX && widthY;
    }
  }, {
    key: 'buttonClick',
    value: function buttonClick(e) {
      // https://stackoverflow.com/questions/24384368/simple-button-in-html5-canvas
      var buttonArea = {
        x: 18,
        y: 8,
        width: 16,
        height: 16
      };
      var mousePos = this.getMousePos(e);

      if (this.isInside(mousePos, buttonArea)) {
        window.alert('Button clicked!');
      }
    }
  }, {
    key: 'drawTopBar',
    value: function drawTopBar() {
      var ctx = this.ctx;
      // for-now-fake top bar

      ctx.beginPath(); // bar background
      ctx.fillStyle = "#F8F8F5";
      ctx.fillRect(2, 2, 786, 30);

      ctx.beginPath(); // bottom border bar
      ctx.moveTo(2, 31);
      ctx.strokeStyle = "#C0C0C0";
      ctx.lineWidth = "2";
      ctx.lineTo(788, 31);
      ctx.stroke();

      for (var i = 6; i < 28; i += 4) {
        // horizontal striations
        ctx.beginPath();
        ctx.moveTo(4, i);
        ctx.strokeStyle = "#C0C0C0";
        ctx.lineWidth = "2";
        ctx.lineTo(786, i);
        ctx.stroke();
      }

      this.drawName();
      this.drawButton();
    }
  }, {
    key: 'drawName',
    value: function drawName() {
      var long = this.name.length;
      var width = long * 8.5 + (long > 10 ? 0 : 10); // well enough.
      var centering = (790 - width) / 2;

      var ctx = this.ctx;
      ctx.beginPath();
      ctx.fillStyle = "#F8F8F5";
      ctx.fillRect(centering, 4, width, 24);

      ctx.beginPath(); // disp speaker
      ctx.fillStyle = Colors.textBlack;
      ctx.font = "20px serif";
      ctx.fillText(this.name, centering + 5, 22.5); // +5 for padding
    }
  }, {
    key: 'drawButton',
    value: function drawButton() {
      var ctx = this.ctx;

      ctx.beginPath(); // non-func click-box
      ctx.fillStyle = "#AEAEAE";
      ctx.fillRect(18, 8, 16, 16);

      ctx.beginPath(); // inner sq. border
      ctx.strokeStyle = "#CFCDFF";
      ctx.lineWidth = "2";
      ctx.strokeRect(18, 8, 18, 18);

      ctx.beginPath(); // outer sq. border
      ctx.strokeStyle = "#F8F8F5";
      ctx.lineWidth = "2";
      ctx.strokeRect(14, 4, 24, 24);

      ctx.beginPath(); // upper shadow border
      ctx.moveTo(15, 6);
      ctx.strokeStyle = "#343169";
      ctx.lineWidth = "2";
      ctx.lineTo(37, 6);
      ctx.stroke();

      ctx.beginPath(); // left shadow border
      ctx.moveTo(16, 6);
      ctx.strokeStyle = "#343169";
      ctx.lineWidth = "2";
      ctx.lineTo(16, 27);
      ctx.stroke();

      ctx.beginPath(); // lower shadow border
      ctx.moveTo(19, 24);
      ctx.strokeStyle = "#343169";
      ctx.lineWidth = "2";
      ctx.lineTo(35, 24);
      ctx.stroke();

      ctx.beginPath(); // right shadow border
      ctx.moveTo(34, 9);
      ctx.strokeStyle = "#343169";
      ctx.lineWidth = "2";
      ctx.lineTo(34, 25);
      ctx.stroke();
    }
  }, {
    key: 'drawCardinals',
    value: function drawCardinals() {
      // brace yourself.
      var ctx = this.ctx;

      var vPos = 275;
      var vPos2 = 275; // since it gets called twice
      var vAdj = 15;

      var cardinals = {
        // keys are rendered relative to x,y vals.
        // N => "N" @ 555, 40, EAST => "E" @ ... "A" @ .... "S" ...
        N: [555, 70],
        EAST: {
          E: [766, vPos], // micro adjustments
          A: [765, vPos += vAdj],
          S: [766, vPos += vAdj],
          T: [766, vPos += vAdj]
        },
        SOUTH: [540, 512.5],
        WEST: {
          W: [333, vPos2],
          E: [335, vPos2 += vAdj],
          S: [335.5, vPos2 += vAdj],
          T: [335, vPos2 += vAdj]
        }
      };

      for (var key in cardinals) {
        ctx.beginPath();
        ctx.fillStyle = Colors.textGray;
        ctx.font = "12px serif";

        if (cardinals[key] instanceof Array) {
          // if first level is an array
          if (key === "N") {
            ctx.font = "20px serif";
          }
          ctx.fillText(key, cardinals[key][0], cardinals[key][1]);
        } else {
          // else first level contains another object (E / W)
          for (var subkey in cardinals[key]) {
            ctx.fillText(subkey, cardinals[key][subkey][0], cardinals[key][subkey][1]);
          }
        }
      }
    } // cardinals() end


  }, {
    key: 'drawPlayAreaContainer',
    value: function drawPlayAreaContainer() {
      var ctx = this.ctx;
      // playarea box

      ctx.beginPath();
      ctx.fillStyle = Colors.backgroundGray;
      ctx.fillRect(325, 65, 460, 460);
      // x, y, w, h

      ctx.beginPath(); // border
      ctx.strokeStyle = Colors.borderGray;
      ctx.lineWidth = "2";
      ctx.strokeRect(328, 68, 454, 454);

      ctx.beginPath(); // filled circle around 'N'
      ctx.fillStyle = Colors.backgroundGray;
      ctx.arc(561, 70, 30, 0, Math.PI * 2);
      // x, y, radius, startAngle, endAngle, anticlockwiseBool
      ctx.fill();

      ctx.beginPath(); // border within circle to match
      ctx.fillStyle = Colors.borderGray;
      ctx.arc(561, 70, 28, Math.PI, 0); // half-circle - passable.
      ctx.stroke();

      this.drawCardinals(); // render lettering ontop of everything above
    }
  }, {
    key: 'drawTextAndStatsContainer',
    value: function drawTextAndStatsContainer() {
      var ctx = this.ctx;

      ctx.beginPath();
      ctx.fillStyle = Colors.backgroundGray; // hey bebebe
      ctx.fillRect(5, 35, 315, 490);

      ctx.beginPath(); // border
      ctx.strokeStyle = Colors.borderGray;
      ctx.lineWidth = "2";
      ctx.strokeRect(8, 38, 309, 484);

      ctx.beginPath(); // border line between text and stats
      ctx.moveTo(9, 292); // (-1, +2) adjustment for line overlap / thickness
      ctx.strokeStyle = Colors.borderGray;
      ctx.lineWidth = "2";
      ctx.lineTo(316, 292);
      ctx.stroke();
    }
  }, {
    key: 'draw',
    value: function draw() {
      var ctx = this.ctx;
      // background render area

      ctx.beginPath();
      ctx.fillStyle = "#242424";
      // background black
      ctx.fillRect(0, 0, 790, 530);

      this.drawTopBar();

      this.drawPlayAreaContainer();
      this.drawTextAndStatsContainer();
    }
  }]);

  return Background;
}();

exports.default = Background;

/***/ }),

/***/ "./app/components/character/character.js":
/*!***********************************************!*\
  !*** ./app/components/character/character.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _font_colors = __webpack_require__(/*! ../../util/font_colors */ "./app/util/font_colors.js");

var Colors = _interopRequireWildcard(_font_colors);

var _sprite = __webpack_require__(/*! ../../util/sprite */ "./app/util/sprite.js");

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
  function Character(canvasEl, ctx) {
    _classCallCheck(this, Character);

    this.ctx = ctx;
    this.size = 45;
    this.width = this.size;
    this.height = this.size;
    this.image_url = "app/assets/sprites/char/char_up_down.png";
    // init facing down
    this.direction = "down";

    this.x = 533; // center x
    this.y = 268; // center y

    this.move = this.move.bind(this);
    this.isFacing = this.isFacing.bind(this);
    this.updateSpriteImage = this.updateSpriteImage.bind(this);
  }

  _createClass(Character, [{
    key: 'position',
    value: function position() {
      return [this.x, this.y];
    }
  }, {
    key: 'positionAhead',
    value: function positionAhead() {
      var diff = this.diffAhead();
      return [this.x + diff[0], this.y + diff[1]];
    }
  }, {
    key: 'mapKeyToDir',
    value: function mapKeyToDir(key) {
      switch (key) {
        case 37:
          return "left";
        case 38:
          return "up";
        case 39:
          return "right";
        case 40:
          return "down";
        default:
          return [0, 0];
      }
    }
  }, {
    key: 'makeAmove',
    value: function makeAmove(key) {
      // 37, left // 38, up // 39, right // 40, down
      var dir = this.mapKeyToDir(key);
      var movement = this.isFacing(dir);

      if (movement) {
        return movement;
      } else {
        return [0, 0];
      }
    }
  }, {
    key: 'isFacing',
    value: function isFacing(direction) {
      if (this.direction !== direction) {
        this.direction = direction;
        return false;
      } // else this.dir === dir
      return this.diffAhead();
    }
  }, {
    key: 'diffAhead',
    value: function diffAhead() {
      switch (this.direction) {
        case "left":
          return [-45, 0];
        case "up":
          return [0, -45];
        case "right":
          return [45, 0];
        case "down":
          return [0, 45];
        default:
          return [0, 0];
      }
    }
  }, {
    key: 'updateSpriteImage',
    value: function updateSpriteImage() {
      switch (this.direction) {
        case "up":
          this.image_url = "app/assets/sprites/char/char_up_down.png";
          return [45, 0];
        case "down":
          this.image_url = "app/assets/sprites/char/char_up_down.png";
          return [0, 0];
        case "left":
          this.image_url = "app/assets/sprites/char/char_left_right.png";
          return [0, 0];
        case "right":
          this.image_url = "app/assets/sprites/char/char_left_right.png";
          return [45, 0];
        default:
          this.image_url = "app/assets/sprites/char/char_up_down.png";
          return [0, 0];
      }
    }
  }, {
    key: 'checkWallCollision',
    value: function checkWallCollision(moveToX, moveToY, walls) {
      for (var idx in walls) {
        var wallPos = walls[idx];
        if (wallPos[0] === moveToX && wallPos[1] === moveToY) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'checkPlayAreaCollision',
    value: function checkPlayAreaCollision(moveToX, moveToY) {
      // hard coded maximum bounds
      return moveToX > 345 && moveToX < 750 && moveToY > 80 && moveToY < 485;
    }
  }, {
    key: 'wontCollide',
    value: function wontCollide(key, dx, dy, walls) {
      // returns bool

      // walls is an array/pojo:
      /*
        { 0: [353, 88],
        1: [398, 88] }
      */

      var moveToX = this.x + dx;
      var moveToY = this.y + dy;
      return this.checkPlayAreaCollision(moveToX, moveToY) && this.checkWallCollision(moveToX, moveToY, walls);
    }
  }, {
    key: 'move',
    value: function move(key, walls) {
      var movement = this.makeAmove(key);
      var dx = movement[0];
      var dy = movement[1];

      if (this.wontCollide(key, dx, dy, walls)) {
        this.x += dx;
        this.y += dy;
        this.draw();
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      var ctx = this.ctx;
      var sprite_data = this.updateSpriteImage();
      // updates image url, exports relevant image positioning since L-R and Up-Dw are combinded png's

      new _sprite2.default(this.ctx, this.image_url, this.x, this.y, sprite_data[0], sprite_data[1]);

      // ctx.beginPath(); // simple character box
      //   ctx.fillStyle="#9cd0e5"; // pale blue dot
      // ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Character;
}();

exports.default = Character;

/***/ }),

/***/ "./app/components/levels/levelOne.js":
/*!*******************************************!*\
  !*** ./app/components/levels/levelOne.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.entryRoom = undefined;

var _urls = __webpack_require__(/*! ../../assets/sprites/walls/urls */ "./app/assets/sprites/walls/urls.js");

var urls = _interopRequireWildcard(_urls);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// from the top left, right, then down.

var topLeftX = 353;
var topLeftY = 88;

var alphabet = urls.alphabet;
var brick = urls.brick;
var stone_wall = urls.stone_wall;
var bush = urls.bush;
var flowers = urls.flowers;
var left_arrow = urls.left_arrow;
var right_arrow = urls.right_arrow;
var magic_mouth = urls.magic_mouth;
var rich_soil = urls.rich_soil;
var shrubs = urls.shrubs;

var posOf = urls.posOf;

var entryRoom = exports.entryRoom = [{ // 1st row
  image_url: stone_wall }, {
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
  image_url: stone_wall, type: 'wall' }, {
  image_url: right_arrow, type: 'wall' }, {
  image_url: right_arrow, type: 'wall' }, {
  image_url: magic_mouth }, {
  image_url: left_arrow, type: 'wall' }, {
  image_url: left_arrow, type: 'wall' }, {
  image_url: stone_wall, type: 'wall' }, {
  image_url: alphabet, type: 'wall', srcX: posOf("E")
}]; // room end

/***/ }),

/***/ "./app/components/main_render.js":
/*!***************************************!*\
  !*** ./app/components/main_render.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animation_frame = __webpack_require__(/*! ../util/animation_frame */ "./app/util/animation_frame.js");

var _animation_frame2 = _interopRequireDefault(_animation_frame);

var _background = __webpack_require__(/*! ./background/background */ "./app/components/background/background.js");

var _background2 = _interopRequireDefault(_background);

var _text_area = __webpack_require__(/*! ./text_area/text_area */ "./app/components/text_area/text_area.js");

var _text_area2 = _interopRequireDefault(_text_area);

var _play_area = __webpack_require__(/*! ./play_area/play_area */ "./app/components/play_area/play_area.js");

var _play_area2 = _interopRequireDefault(_play_area);

var _stats_area = __webpack_require__(/*! ./stats_area/stats_area */ "./app/components/stats_area/stats_area.js");

var _stats_area2 = _interopRequireDefault(_stats_area);

var _character = __webpack_require__(/*! ./character/character */ "./app/components/character/character.js");

var _character2 = _interopRequireDefault(_character);

var _font_colors = __webpack_require__(/*! ../util/font_colors */ "./app/util/font_colors.js");

var Colors = _interopRequireWildcard(_font_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainRender = function () {

  // renders the background and static containers

  function MainRender(canvasEl, ctx) {
    _classCallCheck(this, MainRender);

    this.canvasEl = canvasEl;
    this.ctx = ctx;

    // init def for the max space the game occupies
    this.canvasEl.width = 790;
    this.canvasEl.height = 530;

    this.walls = {};
    this.entities = {};
    // oh, you'll see. I hate this. This is why State exists.

    var name = "Josh";
    // eventually replace with input from a login screen.

    this.background = new _background2.default(name, canvasEl, ctx);
    this.playarea = new _play_area2.default(canvasEl, ctx);
    this.textarea = new _text_area2.default(canvasEl, ctx);
    this.statsarea = new _stats_area2.default(canvasEl, ctx);
    this.character = new _character2.default(canvasEl, ctx);

    this.draw = this.draw.bind(this);
    this.run = this.run.bind(this);
    this.inputSelector = this.inputSelector.bind(this);
    this.drawPlayArea = this.drawPlayArea.bind(this);

    // inputSelector needs to be bound first.
    window.addEventListener("keydown", this.run);

    this.text_obj = {
      speaker: "Bob:",
      body: "HELP! I'm trapped in this box! For now at least I can move with 'arrow keys' and examine my surroundings with 'e'. That's something, I suppose."
    };
  }

  // UTILITY //


  _createClass(MainRender, [{
    key: 'inputSelector',
    value: function inputSelector(e) {
      switch (e.keyCode) {
        case 37:case 38:case 39:case 40:
          // l, u, d, r ?
          this.statsarea.updateStat("Stamina", -0.5);
          this.character.move(e.keyCode, this.walls);
          // this.walls? madness. MADNESS. Forward the foundation!
          return 'character'; // prevent reloading from unbound keys

        case 65:
          // 'a' - action, drains stamina
          this.statsarea.updateStat("Stamina", -1);
          return 'stats';

        case 69:
          // 'e' - examine
          var pos = this.character.positionAhead();
          this.examineEntity(pos);

          return true;

        case 82:
          // 'r' - rest // replenishes stamina
          this.statsarea.updateStat("Stamina", "max");
          return 'stats';

        default:
          //   window.alert(`${e.key} is not bound`);
          return false;
      }
    }
  }, {
    key: 'examineEntity',
    value: function examineEntity(pos) {
      for (var idx in this.entities) {
        var ent = this.entities[idx];

        if (ent.pos[0] === pos[0] && ent.pos[1] === pos[1]) {
          var ent_text = cleanText(ent.type);
          this.text_obj = { speaker: 'Examine:', body: 'That\'s ' + ent_text + '!' };
        }
      }
    }
    // \\ //

    // RENDERING //

  }, {
    key: 'drawPlayArea',
    value: function drawPlayArea() {
      var temp = this.playarea.draw();
      this.walls = temp.walls;
      this.entities = temp.entities;
    }
  }, {
    key: 'draw',
    value: function draw() {
      var ctx = this.ctx;

      ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);

      // modules
      this.background.draw();

      this.textarea.draw();
      this.textarea.displayText(this.text_obj);

      this.statsarea.draw();

      // 'walls' bubbled up from within pa.draw
      this.drawPlayArea();

      this.character.draw();
    }
  }, {
    key: 'run',
    value: function run(e) {
      switch (this.inputSelector(e)) {
        case 'character':
          this.statsarea.draw();
          this.drawPlayArea();
          this.character.draw();
          break;
        case 'stats':
          this.statsarea.draw();
          break;
        default:
          this.draw();
      }
    }
  }]);

  return MainRender;
}(); // class end

// textarea.displayText("Magic Mouth", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis gravida commodo. Vestibulum vel velit eget est pretium eleifend. Nulla ex ex, semper sit amet commodo at, tincidunt nec erat. Pellentesque id justo consectetur, posuere est eu, pulvinar ipsum. Praesent rutrum malesuada lacus quis bibendum. Suspendisse sed est luctus mi commodo luctus. Vestibulum ipsum sem, imperdiet at purus vehicula, commodo porttitor enim. Ut id sem nunc. Duis sollicitudin purus sagittis, consequat enim dignissim, pretium eros. Aenean nisi purus, bibendum vel pretium eget, varius id turpis. Etiam eu quam a nisl lobortis egestas nec id felis. Mauris vitae finibus eros. Duis viverra blandit nibh, a fringilla justo ultricies ac.");


exports.default = MainRender;
var str = "HELP! I'm trapped in this box! For now at least I can move with 'arrow keys' and examine my surroundings with 'e'. That's something, I suppose.";

window.str = str;

var find_whiteSpace = function find_whiteSpace(str) {
  var break_at_or_before = 44;

  var running_idx = 0;
  var counter = 0;
  var good_idxs = [];
  var closest_idx = 0;

  for (var i = 0; i < str.length; i++) {
    var matched = str.slice(i, str.length).match(/\s/);
    if (matched === null) continue;

    console.log(running_idx);

    running_idx += matched.index;
    if (running_idx / break_at_or_before - counter < 1) {
      closest_idx = running_idx;
    } else {
      counter += 1;
      good_idxs.push(closest_idx);
    }

    i += matched.index;
  }

  // console.log(good_idxs.length);

  if (good_idxs.length < Math.floor(str.length / break_at_or_before)) {
    good_idxs.push(str.length);
  }

  var result = [];
  var start = 0;
  var end = 0;
  good_idxs.forEach(function (idx) {
    console.log(idx);
    end = idx - 1;
    result.push(str.slice(start, end));
    start = idx;
  });

  console.log(result);
};

window.find_whiteSpace = find_whiteSpace;

/***/ }),

/***/ "./app/components/play_area/play_area.js":
/*!***********************************************!*\
  !*** ./app/components/play_area/play_area.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _levelOne = __webpack_require__(/*! ../levels/levelOne */ "./app/components/levels/levelOne.js");

var levelOne = _interopRequireWildcard(_levelOne);

var _font_colors = __webpack_require__(/*! ../../util/font_colors */ "./app/util/font_colors.js");

var Colors = _interopRequireWildcard(_font_colors);

var _sprite = __webpack_require__(/*! ../../util/sprite */ "./app/util/sprite.js");

var _sprite2 = _interopRequireDefault(_sprite);

var _load_resources = __webpack_require__(/*! ../../util/load_resources */ "./app/util/load_resources.js");

var _load_resources2 = _interopRequireDefault(_load_resources);

var _underscore = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayArea = function () {
  function PlayArea(canvasEl, ctx) {
    _classCallCheck(this, PlayArea);

    this.ctx = ctx;
    this.width = 405;
    this.height = 405;

    var centering = (canvasEl.height - this.height) / 2;
    this.x = canvasEl.width - this.width - centering + 30;
    this.y = canvasEl.height - this.height - centering + 25;
  }

  _createClass(PlayArea, [{
    key: 'drawLevels',
    value: function drawLevels(levels) {
      for (var level_key in levels) {
        var level = levels[level_key];

        for (var room_key in level) {
          return this.drawLevel(level[room_key]); // bubble up 'walls'
        }
      }
    }
  }, {
    key: 'spriteX',
    value: function spriteX(obj_idx) {
      // same same, but diff.
      var modulo = obj_idx % 9;
      if (modulo < 0) {
        modulo = 8;
      }
      return 353 + modulo * 45;
    }
  }, {
    key: 'spriteY',
    value: function spriteY(obj_idx) {
      // but same same.
      var floored = Math.floor(obj_idx / 9);
      return 88 + floored * 45;
    }
  }, {
    key: 'drawLevel',
    value: function drawLevel(room) {
      var _this = this;

      var ctx = this.ctx;
      // dev: make objects from top left, right, then typerwritter down, for consistency's sake.

      // 'room' is a (big) array / POJO

      var walls = {}; // to hold position of all walls on the map
      var entities = {}; // to hold position of all entities " "

      room.forEach(function (obj, obj_idx) {
        var x = _this.spriteX(obj_idx);
        var y = _this.spriteY(obj_idx);

        if (!obj.srcX) {
          // ensure attr's
          obj.srcX = 0;
          obj.srcY = 0;
        }

        var obj_type = obj.image_url.match(/(sprites\/\w*\/)(\w*)/)[2];

        if (obj_type.includes('wall') || obj.type === 'wall') {
          Object.assign(walls, _defineProperty({}, obj_idx, [x, y]));
        }

        Object.assign(entities, _defineProperty({}, obj_idx, {
          pos: [x, y],
          type: obj_type
        }));

        new _sprite2.default(_this.ctx, obj.image_url, x, y, obj.srcX, obj.srcY);
      });

      return { walls: walls, entities: entities }; // bubbles up to drawLevels as pojo
    }
  }, {
    key: 'draw',
    value: function draw() {
      var ctx = this.ctx;
      ctx.clearRect(this.x, this.y, this.width, this.height);

      ctx.fillStyle = "black";
      ctx.fillRect(this.x, this.y, this.height, this.width);
      return this.drawLevels({ // bubble up 'walls'
        levelOne: levelOne
      });
    }
  }]);

  return PlayArea;
}();

exports.default = PlayArea;

/***/ }),

/***/ "./app/components/stats_area/stats_area.js":
/*!*************************************************!*\
  !*** ./app/components/stats_area/stats_area.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _font_colors = __webpack_require__(/*! ../../util/font_colors */ "./app/util/font_colors.js");

var Colors = _interopRequireWildcard(_font_colors);

var _underscore = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StatsArea = function () {
  function StatsArea(canvasEl, ctx, score) {
    _classCallCheck(this, StatsArea);

    this.ctx = ctx;
    this.width = 305;
    this.height = 227;

    this.score = score || 0;

    this.x = 10;
    this.y = 293;

    this.statVals = {
      // starting vals ( 20, 20 )
      // starting vals ( 20, 30 ) to display hatch
      Food: [20, 30],
      Health: [20, 30],
      Spirit: [20, 30],
      Strength: [20, 30],
      Agility: [20, 30],
      Intellect: [20, 30],
      Stamina: [20, 30]
    };

    this.updateStat = this.updateStat.bind(this);
    this.boostStat = this.boostStat.bind(this);
    this.draw = this.draw.bind(this);
  }

  _createClass(StatsArea, [{
    key: 'updateStat',
    value: function updateStat(stat, dVal, callback) {
      // for affecting the pool
      if (dVal === "max") {
        var setVal = Object.assign(this.statVals[stat][1]);
        this.statVals[stat][0] = setVal;
      } else {
        if (this.statVals[stat][0] > 0) {
          this.statVals[stat][0] += dVal;

          if (callback) {
            callback();
          } // not sure if I actually need/want this, but leaving it for now.
        } else {
          window.alert("You must rest! Press 'r' ");
        }
      }
    }
  }, {
    key: 'boostStat',
    value: function boostStat(stat, dVal) {
      // for increasing the maximum
      this.statVals[stat][1] += dVal;
    }
  }, {
    key: 'displayScore',
    value: function displayScore() {
      var score = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var ctx = this.ctx;

      var vPos = 315;

      ctx.beginPath(); // disp "Score"
      ctx.fillStyle = Colors.textBlack;
      ctx.font = "20px serif";
      ctx.fillText("Score", 20, vPos);

      var horizontalAdj = 295;
      if (score >= 10 && score < 99) {
        horizontalAdj -= 10;
      } else if (score >= 100 && score < 1000) {
        horizontalAdj -= 20;
      } else if (score >= 1000 && score < 10000) {
        horizontalAdj -= 30;
      } else if (score >= 10000) {
        horizontalAdj -= 40;
      }

      ctx.beginPath();
      ctx.fillStyle = Colors.textBlack;
      ctx.font = "18px serif";
      ctx.fillText(score, horizontalAdj, vPos);

      ctx.beginPath(); // border line between score and stats
      ctx.moveTo(7, vPos + 10);
      ctx.strokeStyle = Colors.borderGray;
      ctx.lineWidth = "2";
      ctx.lineTo(317, vPos + 10);
      ctx.stroke();
    }
  }, {
    key: 'hatchRect',
    value: function hatchRect(x1, y1, dx, dy, delta, color) {
      // source: https://codepen.io/adammertel/pen/xZyWxy
      // startX, Y, width, height, density-(lower val = more lines), color
      var ctx = this.ctx;

      ctx.rect(x1, y1, dx, dy);
      ctx.save();
      ctx.clip();

      var majorAxe = _underscore2.default.max([dx, dy]);
      ctx.strokeStyle = color;

      _underscore2.default.each(_underscore2.default.range(-1 * majorAxe, majorAxe, delta), function (n, i) {
        ctx.beginPath();
        ctx.moveTo(n + x1, y1);
        ctx.lineTo(dy + n + x1, y1 + dy);
        ctx.stroke();
      });

      ctx.restore();
    }
  }, {
    key: 'statBar',
    value: function statBar(key, pos, keyVals) {
      // Color[key] === hex_value
      var ctx = this.ctx;
      var width = 225;
      var height = 20;
      var x = pos[0] + 65; // relative to parent 'vPos'
      var y = pos[1] - 15;

      ctx.beginPath(); // background
      ctx.fillStyle = "white";
      ctx.fillRect(x, y, width, height);
      // x, y, w, h

      this.hatchRect(x, y, keyVals[1], height, 5, Colors[key]);

      ctx.beginPath(); // min/current val
      ctx.fillStyle = Colors[key];
      ctx.fillRect(x, y, keyVals[0], height);

      ctx.beginPath(); // border on top of everything
      ctx.strokeStyle = "black";
      ctx.lineWidth = "1.5";
      ctx.strokeRect(x, y, width, height);
    }
  }, {
    key: 'displayStats',
    value: function displayStats() {
      // this.statVals is a hash of matching k-v pairs
      // statVals = {
      //   Food = [current, max],
      //   ...
      // }
      var ctx = this.ctx;
      var vPos = 350;
      var adj = 27;
      var h = 20;

      var stats = {
        Food: [h, vPos],
        Health: [h, vPos += adj],
        Spirit: [h, vPos += adj],
        Strength: [h, vPos += adj],
        Agility: [h, vPos += adj],
        Intellect: [h, vPos += adj],
        Stamina: [h, vPos += adj]
      };

      for (var key in stats) {
        ctx.beginPath(); // stat text
        ctx.fillStyle = Colors.textBlack;
        ctx.font = "16px serif";
        ctx.fillText(key, stats[key][0], stats[key][1]);

        this.statBar(key, stats[key], this.statVals[key]); // actual bar
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      var ctx = this.ctx;
      ctx.fillStyle = "#DFDFDF";
      ctx.fillRect(this.x, this.y, this.width, this.height);

      this.displayScore(314);
      this.displayStats();
    }
  }]);

  return StatsArea;
}();

exports.default = StatsArea;

/***/ }),

/***/ "./app/components/text_area/text_area.js":
/*!***********************************************!*\
  !*** ./app/components/text_area/text_area.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _font_colors = __webpack_require__(/*! ../../util/font_colors */ "./app/util/font_colors.js");

var Colors = _interopRequireWildcard(_font_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextArea = function () {
  function TextArea(canvasEl, ctx) {
    _classCallCheck(this, TextArea);

    this.ctx = ctx;
    this.width = 305;
    this.height = 250;

    this.currentText = [];

    this.x = 10;
    this.y = 40;
  }

  _createClass(TextArea, [{
    key: "parseBody",
    value: function parseBody(body) {
      // parses a string into chunks of 44 characters:
      // max width of disp @ font = 16px

      // improve to only break on white space <= 44
      var result = [];
      for (var i = 0; i < Math.ceil(body.length / 44); i++) {
        var start = i * 44;
        var end = (i + 1) * 44;
        result.push(body.slice(start, end));
      }

      return result;
    }
  }, {
    key: "displayText",
    value: function displayText(_ref) {
      var speaker = _ref.speaker,
          body = _ref.body;


      var parsedText = this.parseBody(body);

      var ctx = this.ctx;
      // this.currentText.push([speaker,text]);
      var start = 60;
      // needs to be adjusted based on collective displayed text.
      // or just render one chunk of text at a time, sounds easier for now than keeping track of it all.

      ctx.beginPath(); // disp speaker
      ctx.fillStyle = Colors.textBlack;
      ctx.font = "16px serif";
      ctx.fillText(speaker, 15, start);

      start += 10; // bump down.
      parsedText.forEach(function (text) {
        ctx.beginPath(); // disp speaker
        ctx.fillStyle = Colors.textBlack;
        ctx.font = "16px serif";
        ctx.fillText(text, 15, start += 15);
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.fillStyle = "#FFFFCF";
      this.ctx.fillRect(this.x, this.y, this.width, this.height);

      // this.displayText("Magic Mouth", "Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?Who is bob?.");
    }
  }]);

  return TextArea;
}();

exports.default = TextArea;

/***/ }),

/***/ "./app/util/animation_frame.js":
/*!*************************************!*\
  !*** ./app/util/animation_frame.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// currently broken
var requestAnimFrame = function () {
  // https://github.com/jlongster/canvas-game-bootstrap/blob/a878158f39a91b19725f726675c752683c9e1c08/js/app.js
  // try something better, else fallback to bedrock
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

exports.default = requestAnimFrame;

/***/ }),

/***/ "./app/util/font_colors.js":
/*!*********************************!*\
  !*** ./app/util/font_colors.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var backgroundGray = exports.backgroundGray = "#BEBEBE";
var borderGray = exports.borderGray = "#9B9B9B";
var textGray = exports.textGray = "#4C4C4C";
var textBlack = exports.textBlack = "#000000";

// stat colors
var Food = exports.Food = "#064700";
var Health = exports.Health = "#AC0002";
var Spirit = exports.Spirit = "#FED136";
var Strength = exports.Strength = "#996934";
var Agility = exports.Agility = "#342B9A";
var Intellect = exports.Intellect = "#9A95FF";
var Stamina = exports.Stamina = "#3B9D34";

/***/ }),

/***/ "./app/util/load_resources.js":
/*!************************************!*\
  !*** ./app/util/load_resources.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// adapted from https://jlongster.com/Making-Sprite-based-Games-with-Canvas

/*
resources.load([
    'img/sprites.png',
    'img/terrain.png'
]);
resources.onReady(game_setup_fn => game_run_fn);
*/
var Resources = function () {
    function Resources() {
        _classCallCheck(this, Resources);

        this.resourceCache = {};
        this.loading = [];
        this.readyCallbacks = [];
    }

    _createClass(Resources, [{
        key: "load",
        value: function load(urlOrArr) {
            var _this = this;

            if (urlOrArr instanceof Array) {
                urlOrArr.forEach(function (url) {
                    _this._load(url);
                });
            } else {
                this._load(urlOrArr);
            }
        }
    }, {
        key: "_load",
        value: function _load(url) {
            var _this2 = this;

            if (this.resourceCache[url]) {
                return this.resourceCache[url];
            } else {
                var img = new Image();
                img.onload = function () {
                    _this2.resourceCache[url] = img;

                    if (_this2.isReady()) {
                        _this2.readyCallbacks.forEach(function (func) {
                            func();
                        });
                    }
                };
                this.resourceCache[url] = false;
                img.src = url;
            }
        }
    }, {
        key: "get",
        value: function get(url) {
            return this.resourceCache[url];
        }
    }, {
        key: "isReady",
        value: function isReady() {
            var ready = true;

            for (var key in this.resourceCache) {
                if (this.resourceCache.hasOwnProperty(key) && !this.resourceCache[key]) {
                    ready = false;
                }
            }
            return ready;
        }
    }, {
        key: "onReady",
        value: function onReady(func) {
            this.readyCallbacks.push(func);
        }
    }, {
        key: "load_resources",
        value: function load_resources() {
            this.resourceCache = {};
            this.loading = [];
            this.readyCallbacks = [];
        }
    }]);

    return Resources;
}();

exports.default = Resources;

/***/ }),

/***/ "./app/util/sprite.js":
/*!****************************!*\
  !*** ./app/util/sprite.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = function () {
  // https://github.com/jlongster/canvas-game-bootstrap/blob/a878158f39a91b19725f726675c752683c9e1c08/js/sprite.js

  function Sprite(ctx, image_url, x, y) {
    var srcX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var srcY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    var _this = this;

    var width = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 45;
    var height = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 45;

    _classCallCheck(this, Sprite);

    this.ctx = ctx;
    this.image = new Image();
    this.image.src = image_url;
    this.x = x;
    this.y = y;
    this.srcX = srcX;
    this.srcY = srcY;
    this.width = width;
    this.height = height;

    this.image.onload = function () {
      _this.draw();
      // for illustration, but will need to look into making 'resources' actually work so I can call when I need to instead of instantly? Or load the whole level at once? Sounds like a bad idea but functionally easier?
    };

    this.draw = this.draw.bind(this);
  }

  _createClass(Sprite, [{
    key: "draw",
    value: function draw() {
      /* (
      image,
      sx, sy,
      sWidth, sHeight,
      dx, dy,
      dWidth, dHeight
      ) */
      this.ctx.drawImage(this.image, this.srcX, this.srcY, 45, 45, this.x, this.y, this.width, this.height);
    }
  }]);

  return Sprite;
}();

exports.default = Sprite;

/***/ }),

/***/ "./node_modules/underscore/underscore.js":
/*!***********************************************!*\
  !*** ./node_modules/underscore/underscore.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.9.0
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.9.0';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      // The 2-argument case is omitted because we’re not using it.
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  var builtinIteratee;

  // An internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either `identity`,
  // an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
    return _.property(value);
  };

  // External wrapper for our callback generator. Users may customize
  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
  // This abstraction hides the internal-only argCount argument.
  _.iteratee = builtinIteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // Some functions take a variable number of arguments, or a few expected
  // arguments at the beginning and then a variable number of values to operate
  // on. This helper accumulates all remaining arguments past the function’s
  // argument length (or an explicit `startIndex`), into an array that becomes
  // the last argument. Similar to ES6’s "rest parameter".
  var restArguments = function(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;
      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var deepGet = function(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object.
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = shallowProperty('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  var createReduce = function(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function(obj, iteratee, memo, initial) {
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      if (!initial) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };

    return function(obj, iteratee, memo, context) {
      var initial = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (_.isFunction(path)) {
      func = path;
    } else if (_.isArray(path)) {
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return _.map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null) return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection.
  _.shuffle = function(obj) {
    return _.sample(obj, Infinity);
  };

  // Sample **n** random values from a collection using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = _.random(index, last);
      var temp = sample[index];
      sample[index] = sample[rand];
      sample[rand] = temp;
    }
    return sample.slice(0, n);
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, key, list) {
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior, partition) {
    return function(obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (_.isString(obj)) {
      // Keep surrogate pair characters together
      return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = group(function(result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true);

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null || array.length < 1) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null || array.length < 1) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, Boolean);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        // Flatten current level of array or arguments object.
        if (shallow) {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        } else {
          flatten(value, shallow, strict, output);
          idx = output.length;
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = restArguments(function(array, otherArrays) {
    return _.difference(array, otherArrays);
  });

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // The faster algorithm will not work with an iteratee if the iteratee
  // is not a one-to-one function, so providing an iteratee will disable
  // the faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted && !iteratee) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = restArguments(function(arrays) {
    return _.uniq(flatten(arrays, true, true));
  });

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = restArguments(function(array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  });

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices.
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = restArguments(_.unzip);

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values. Passing by pairs is the reverse of _.pairs.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions.
  var createPredicateIndexFinder = function(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  };

  // Returns the first index on an array-like that passes a predicate test.
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions.
  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Chunk a single array into multiple arrays, each containing `count` or fewer
  // items.
  _.chunk = function(array, count) {
    if (count == null || count < 1) return [];
    var result = [];
    var i = 0, length = array.length;
    while (i < length) {
      result.push(slice.call(array, i, i += count));
    }
    return result;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments.
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = restArguments(function(func, context, args) {
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
  _.partial = restArguments(function(func, boundArgs) {
    var placeholder = _.partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });

  _.partial.placeholder = _;

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = restArguments(function(obj, keys) {
    keys = flatten(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');
    while (index--) {
      var key = keys[index];
      obj[key] = _.bind(obj[key], obj);
    }
  });

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;

    var later = function(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function(args) {
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  _.restArguments = restArguments;

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  };

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object.
  // In contrast to _.map it returns an object.
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  // The opposite of _.object.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`.
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test.
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Internal pick helper function to determine if `obj` has key `key`.
  var keyInObj = function(value, key, obj) {
    return key in obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = restArguments(function(obj, keys) {
    var result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
      keys = _.allKeys(obj);
    } else {
      iteratee = keyInObj;
      keys = flatten(keys, false, false);
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  });

  // Return a copy of the object without the blacklisted properties.
  _.omit = restArguments(function(obj, keys) {
    var iteratee = keys[0], context;
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
      if (keys.length > 1) context = keys[1];
    } else {
      keys = _.map(flatten(keys, false, false), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  });

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq, deepEq;
  eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    return deepEq(a, b, aStack, bStack);
  };

  // Internal recursive comparison function for `isEqual`.
  deepEq = function(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
      case '[object Symbol]':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
  var nodelist = root.document && root.document.childNodes;
  if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    return _.isNumber(obj) && isNaN(obj);
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, path) {
    if (!_.isArray(path)) {
      return obj != null && hasOwnProperty.call(obj, path);
    }
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (obj == null || !hasOwnProperty.call(obj, key)) {
        return false;
      }
      obj = obj[key];
    }
    return !!length;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  // Creates a function that, when passed an object, will traverse that object’s
  // properties down the given `path`, specified as an array of keys or indexes.
  _.property = function(path) {
    if (!_.isArray(path)) {
      return shallowProperty(path);
    }
    return function(obj) {
      return deepGet(obj, path);
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    if (obj == null) {
      return function(){};
    }
    return function(path) {
      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // Traverses the children of `obj` along `path`. If a child is a function, it
  // is invoked with its parent as context. Returns the value of the final
  // child, or `fallback` if any child is undefined.
  _.result = function(obj, path, fallback) {
    if (!_.isArray(path)) path = [path];
    var length = path.length;
    if (!length) {
      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length; // Ensure we don't continue iterating.
      }
      obj = _.isFunction(prop) ? prop.call(obj) : prop;
    }
    return obj;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offset.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    var render;
    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var chainResult = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
    return _;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return chainResult(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return chainResult(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return String(this._wrapped);
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}());

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map