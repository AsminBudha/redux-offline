"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyDefaults = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _defaults = _interopRequireDefault(require("./defaults"));

/* global $Shape */
var applyDefaults = function applyDefaults() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _objectSpread2.default)({}, _defaults.default, config);
};

exports.applyDefaults = applyDefaults;