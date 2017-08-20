import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const DEFAULT_HEIGHT = 70;
const DEFAULT_RADIUS = 40;
const DEFAULT_CLASSNAME_PREFIX = 'crd-btn-login';
const DEFAULT_CLASSNAME = `${DEFAULT_CLASSNAME_PREFIX} ${DEFAULT_CLASSNAME_PREFIX}-sign`;

const styles = {
  button: {
    height: 'auto',
    lineHeight: `${DEFAULT_HEIGHT}px`,
    borderRadius: DEFAULT_RADIUS,
  },
  overlay: {
    padding: DEFAULT_RADIUS / 2,
    borderRadius: DEFAULT_RADIUS,
    height: 'auto',
  },
  label: {
    color: 'white',
  },
  style: {
    borderRadius: DEFAULT_RADIUS,
  },
  ripple: {
    borderRadius: DEFAULT_RADIUS,
    backgroundColor: 'white',
  },
};

const LoginButton = ({ ...props }) => (

  <RaisedButton
    {...props}
  />

);

LoginButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  buttonStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  rippleStyle: PropTypes.object,
};

LoginButton.defaultProps = {
  className: DEFAULT_CLASSNAME,
  style: styles.style,
  buttonStyle: styles.button,
  labelStyle: styles.label,
  rippleStyle: styles.ripple,
};

// render once
LoginButton.shouldComponentUpdate = () => false;

export default LoginButton;
