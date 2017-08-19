'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

require('../fonts/font-awesome.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// lib/styleguide/Wrapper.js
var Wrapper = function Wrapper(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _MuiThemeProvider2.default,
    null,
    children
  );
};

Wrapper.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = Wrapper;