import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

import '../styles/_buttons.scss';


const styles = {
  button: {
    height: 'auto',
    borderRadius: 25,
  },
  overlay: {
    padding: 10,
    borderRadius: 25,
  },
  label: {
    fontWeight: 600,
    color: 'red',
  },
  style: {
    borderRadius: 25,
  },
  ripple: {
    borderRadius: 25,
    backgroundColor: 'red',
  },
};

const LoginButton = ({ defaultClassName, className, ...props }) => (

  <RaisedButton
    className={[defaultClassName, className].join(' ')}
    style={ty}
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
  style,
  button,
  label,
  defaultClassName: PropTypes.string,
};

LoginButton.defaultProps = {
  className: null,
  defaultClassName: 'crd-btn',
};

export default LoginButton;
