'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_HEIGHT = 70;
var DEFAULT_RADIUS = 40;
var DEFAULT_CLASSNAME_PREFIX = 'crd-btn-login';
var DEFAULT_CLASSNAME = DEFAULT_CLASSNAME_PREFIX + ' ' + DEFAULT_CLASSNAME_PREFIX + '-sign';

var styles = {
  button: {
    height: 'auto',
    lineHeight: DEFAULT_HEIGHT + 'px',
    borderRadius: DEFAULT_RADIUS
  },
  overlay: {
    padding: DEFAULT_RADIUS / 2,
    borderRadius: DEFAULT_RADIUS,
    height: 'auto'
  },
  label: {
    color: 'white'
  },
  style: {
    borderRadius: DEFAULT_RADIUS
  },
  ripple: {
    borderRadius: DEFAULT_RADIUS,
    backgroundColor: 'white'
  }
};

var LoginButton = function LoginButton(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(_RaisedButton2.default, props);
};

LoginButton.propTypes = {
  label: _propTypes2.default.string,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  buttonStyle: _propTypes2.default.object,
  labelStyle: _propTypes2.default.object,
  rippleStyle: _propTypes2.default.object
};

LoginButton.defaultProps = {
  className: DEFAULT_CLASSNAME,
  style: styles.style,
  buttonStyle: styles.button,
  labelStyle: styles.label,
  rippleStyle: styles.ripple
};

// render once
LoginButton.shouldComponentUpdate = function () {
  return false;
};

exports.default = LoginButton;