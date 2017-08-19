'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_SIZE = 40;

var styles = {
  icon: {
    borderRadius: '50%',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: '1.5rem'
  }
};

var RoundFontIcon = function RoundFontIcon(_ref) {
  var size = _ref.size,
      color = _ref.color,
      className = _ref.className,
      backgroundColor = _ref.backgroundColor,
      props = _objectWithoutProperties(_ref, ['size', 'color', 'className', 'backgroundColor']);

  var customStyle = _extends({}, styles.icon, { lineHeight: size + 'px', width: size, height: size, color: color, backgroundColor: backgroundColor });

  return _react2.default.createElement('i', _extends({
    style: customStyle,
    className: className
  }, props, {
    'aria-hidden': 'true'
  }));
};

RoundFontIcon.propTypes = {
  size: _propTypes2.default.number,
  color: _propTypes2.default.string,
  className: _propTypes2.default.string.isRequired,
  backgroundColor: _propTypes2.default.string
};

RoundFontIcon.defaultProps = {
  size: DEFAULT_SIZE,
  color: 'black',
  backgroundColor: 'white'
};

// render once
RoundFontIcon.shouldComponentUpdate = function () {
  return false;
};

exports.default = RoundFontIcon;