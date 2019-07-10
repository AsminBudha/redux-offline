"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _default = function _default(state) {
  var offline = state.offline,
      rest = (0, _objectWithoutProperties2.default)(state, ["offline"]);
  return {
    get: offline,
    set: function set(offlineState) {
      return typeof offlineState === 'undefined' ? rest : (0, _objectSpread2.default)({
        offline: offlineState
      }, rest);
    }
  };
};

exports.default = _default;