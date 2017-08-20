'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LoginButton = require('./LoginButton');

var _LoginButton2 = _interopRequireDefault(_LoginButton);

var _RoundFontIcon = require('../icons/RoundFontIcon');

var _RoundFontIcon2 = _interopRequireDefault(_RoundFontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TypeInfo = {
  facebook: {
    className: 'crd-btn-login-facebook',
    iconClassName: 'fa fa-facebook'
  },
  twitter: {
    className: 'crd-btn-login-twitter',
    iconClassName: 'fa fa-twitter'
  },
  email: {
    className: 'crd-btn-login-email',
    iconClassName: 'fa fa-envelope-o'
  }
};

var LoginSocialButton = function LoginSocialButton(_ref) {
  var type = _ref.type,
      className = _ref.className,
      iconClassName = _ref.iconClassName,
      withIcon = _ref.withIcon,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['type', 'className', 'iconClassName', 'withIcon', 'children']);

  var typeInfo = TypeInfo[type] || {};

  var icon = withIcon ? _react2.default.createElement(_RoundFontIcon2.default, { className: iconClassName || typeInfo.iconClassName }) : null;

  var buttonClassName = ['crd-btn-login', typeInfo.className, className].map(function (c) {
    return c || '';
  }).join(' ');

  return _react2.default.createElement(
    _LoginButton2.default,
    _extends({
      className: buttonClassName
    }, props),
    icon,
    children
  );
};

LoginSocialButton.propTypes = {
  className: _propTypes2.default.string,
  iconClassName: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['twitter', 'facebook', 'email']),
  withIcon: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

LoginSocialButton.defaultProps = {
  className: null,
  iconClassName: null,
  withIcon: false,
  children: null
};

// render once
LoginSocialButton.shouldComponentUpdate = function () {
  return false;
};

exports.default = LoginSocialButton;