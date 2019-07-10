"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _reactNative = require("react-native");

var _reduxPersist = require("redux-persist");

// $FlowIgnore
// eslint-disable-line
var _default = function _default(store, options, callback) {
  return (0, _reduxPersist.persistStore)(store, (0, _objectSpread2.default)({
    storage: _reactNative.AsyncStorage
  }, options), callback);
};

exports.default = _default;