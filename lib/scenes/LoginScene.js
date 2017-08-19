'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoginButton = require('../buttons/LoginButton');

var _LoginButton2 = _interopRequireDefault(_LoginButton);

var _LoginSocialButton = require('../buttons/LoginSocialButton');

var _LoginSocialButton2 = _interopRequireDefault(_LoginSocialButton);

require('../styles/_login.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginScene = function LoginScene() {
  return _react2.default.createElement(
    'div',
    { className: 'crd-login-scene' },
    _react2.default.createElement(
      'div',
      { className: 'crd-login-social' },
      _react2.default.createElement(_LoginSocialButton2.default, {
        label: 'connect with facebook',
        className: 'crd-btn-fb'
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'crd-login-social' },
      _react2.default.createElement(_LoginButton2.default, {
        className: 'crd-btn-sign'
      })
    )
  );
};
// import PropTypes from 'prop-types';
exports.default = LoginScene;