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
  setInterval(mainrender.draw(), 10);
});

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import TextArea from './components/text_area/text_area';


var _play_area = __webpack_require__(/*! ./play_area/play_area */ "./app/components/play_area/play_area.js");

var _play_area2 = _interopRequireDefault(_play_area);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import StatsArea from './components/stats_area/stats_area';

var MainRender = function () {
  // renders the background and static containers

  function MainRender(canvasEl, ctx) {
    _classCallCheck(this, MainRender);

    this.canvasEl = canvasEl;
    this.ctx = ctx;

    this.canvasEl.width = 800; // this is the max width the element occupies
    this.canvasEl.height = 500; // borders and stuff exist inside of this area
  }

  _createClass(MainRender, [{
    key: "directions",
    value: function directions() {
      // brace yourself.
      var ctx = this.ctx;

      var cardinals = {
        N: [555, 40],
        EAST: {
          E: [768, 250],
          A: [767.5, 265],
          S: [769, 280],
          T: [768, 295]
        },
        SOUTH: [540, 482.5],
        WEST: {
          W: [331, 250],
          E: [333, 265],
          S: [333, 280],
          T: [332, 295]
        }
      };

      for (var key in cardinals) {
        ctx.beginPath();
        ctx.fillStyle = "gray";
        ctx.font = "12px serif";

        if (cardinals[key] instanceof Array) {
          if (key === "N") {
            ctx.font = "20px serif";
          }

          ctx.fillText(key, cardinals[key][0], cardinals[key][1]);
        } else {
          for (var subkey in cardinals[key]) {
            ctx.fillText(subkey, cardinals[key][subkey][0], cardinals[key][subkey][1]);
          }
        }
      }
    }
  }, {
    key: "playAreaContainer",
    value: function playAreaContainer() {
      var ctx = this.ctx;
      // playarea box

      ctx.beginPath();
      ctx.fillStyle = "#bebebe";
      ctx.fillRect(325, 35, 460, 460);
      // x, y, w, h

      ctx.beginPath();
      ctx.fillStyle = "#bebebe";
      ctx.arc(561, 40, 30, 0, Math.PI * 2);
      // x, y, radius, startAngle, endAngle, anticlockwiseBool
      ctx.fill();

      this.directions();
    }
  }, {
    key: "textAndStatsContainer",
    value: function textAndStatsContainer() {
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.fillStyle = "#bebebe";
      ctx.fillRect(5, 5, 315, 490);

      ctx.beginPath(); // outer border
      ctx.strokeStyle = "#adadad";
      ctx.lineWidth = "2";
      ctx.strokeRect(6, 6, 313, 488);

      ctx.beginPath(); // inner-outer border
      ctx.strokeStyle = "#9b9b9b";
      ctx.lineWidth = "2";
      ctx.strokeRect(8, 8, 309, 484);
    }
  }, {
    key: "draw",
    value: function draw() {
      var ctx = this.ctx;
      ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);

      // whole render area
      ctx.beginPath();
      ctx.fillStyle = "#242424";
      ctx.fillRect(0, 0, 800, 500);

      this.playAreaContainer();
      this.textAndStatsContainer();

      // text, x, y

      var playarea = new _play_area2.default(this.canvasEl, this.ctx);
      return playarea.draw();
    }
  }]);

  return MainRender;
}();

exports.default = MainRender;

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayArea = function () {
  function PlayArea(canvasEl, ctx) {
    _classCallCheck(this, PlayArea);

    this.ctx = ctx;
    this.width = 415;
    this.height = 415;

    var centering = (canvasEl.height - this.height) / 2;
    this.y = canvasEl.height - this.height + 10 - centering;
    this.x = canvasEl.width - this.width + 5 - centering;
  }

  _createClass(PlayArea, [{
    key: "draw",
    value: function draw() {
      this.ctx.fillStyle = "black"; // hey bebebe
      this.ctx.fillRect(this.x, this.y, this.height, this.width);
    }
  }]);

  return PlayArea;
}();

exports.default = PlayArea;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map