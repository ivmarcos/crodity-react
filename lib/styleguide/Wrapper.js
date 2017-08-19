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

require('../styles/_buttons.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _MuiThemeProvider2.default,
    null,
    children
  );
}; // lib/styleguide/Wrapper.js


Wrapper.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = Wrapper;