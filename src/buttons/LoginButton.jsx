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
    // fontWeight: 500,
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

const LoginButton = ({ defaultClassName, className, ...props }) => (

  <RaisedButton
    className={[defaultClassName, className].join(' ')}
    {...props}
  />

);

LoginButton.propTypes = {
  /** 
  * Label
  */
  label: PropTypes.string,
  /** 
  * Class name for button
  */
  className: PropTypes.string,
  /** 
  * Default class name for button
  */
  style: PropTypes.object,
  buttonStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  rippleStyle: PropTypes.object,
  defaultClassName: PropTypes.string,
};

LoginButton.defaultProps = {
  className: null,
  defaultClassName: 'crd-btn',
  style: styles.style,
  buttonStyle: styles.button,
  labelStyle: styles.label,
  rippleStyle: styles.ripple,
};

export default LoginButton;
