module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // Inspired by Kristin Baumann's countdown component, converted to hooks
// https://medium.com/@kristin_baumann/react-countdown-6455838b6faf

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PROGRESS_BAR_RADIUS = 161; // px

var Countdown = function Countdown(_ref) {
  var text = _ref.text,
      targetDate = _ref.targetDate,
      tMinusNDays = _ref.tMinusNDays;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      timeRemaining = _useState2[0],
      setTimeRemaining = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      progress = _useState4[0],
      setProgress = _useState4[1];

  (0, _react.useEffect)(function () {
    var timeLeft = calculateCountdown(targetDate);
    timeLeft && setTimeRemaining(timeLeft);
    setProgress(Math.round(360 * (tMinusNDays - timeLeft.days) / tMinusNDays));
  }, [targetDate]);

  var calculateCountdown = function calculateCountdown(endDate) {
    var diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    var timeLeft = {
      days: 0
    };

    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    return timeLeft;
  };

  var addLeadingZeros = function addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  };

  // Math from Matt's answer:
  // https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle/24569190#24569190

  // for calculating progress segment of SVG
  var polarToCartesian = function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  var describeArc = function describeArc(x, y, radius, startAngle, endAngle) {

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

    var d = ["M", start.x, start.y, "A", radius, radius, 0, arcSweep, 0, end.x, end.y].join(" ");

    return d;
  };

  return _react2.default.createElement(
    'div',
    { className: 'countdown' },
    _react2.default.createElement(
      'h4',
      null,
      text
    ),
    _react2.default.createElement(
      'div',
      { className: 'countdown-date-group' },
      _react2.default.createElement(
        'div',
        { className: 'countdown-date-item' },
        _react2.default.createElement(
          'strong',
          null,
          addLeadingZeros(timeRemaining.days ? timeRemaining.days : ' . ')
        ),
        _react2.default.createElement(
          'span',
          null,
          'Jour' + (timeRemaining.days !== 1 && 's')
        )
      )
    ),
    _react2.default.createElement(
      'svg',
      { className: 'countdown-circle', viewBox: '-8 -8 338 338', height: '100', width: '100' },
      _react2.default.createElement('circle', { className: 'countdown-circle-back', cx: PROGRESS_BAR_RADIUS, cy: PROGRESS_BAR_RADIUS, r: PROGRESS_BAR_RADIUS, fill: 'none' }),
      _react2.default.createElement('path', { className: 'countdown-circle-progress', d: describeArc(PROGRESS_BAR_RADIUS, PROGRESS_BAR_RADIUS, PROGRESS_BAR_RADIUS, 0, progress), 'stroke-width': '8', fill: 'none' })
    )
  );
};

exports.default = Countdown;

/***/ })
/******/ ]);