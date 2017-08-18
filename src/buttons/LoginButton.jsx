import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

import '../styles/_buttons.scss';

const styles = {
  button: {
    height: 'auto',
    borderRadius: 30,
  },
  overlay: {
    padding: 10,
    borderRadius: 30,
  },
  label: {
    color: 'white',
  },
  style: {
    borderRadius: 30,
  },
  ripple: {
    borderRadius: 30,
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
  className: 'crd-btn',
  style: styles.style,
  buttonStyle: styles.button,
  labelStyle: styles.label,
  rippleStyle: styles.ripple,
};

export default LoginButton;
