import React from 'react';
import PropTypes from 'prop-types';

import LoginButton from './LoginButton';

const LoginSocialButton = ({ defaultClassName, className, ...props }) => (

  <LoginButton
    className={[defaultClassName, className].join(' ')}
    {...props}
  />

);

LoginSocialButton.propTypes = {
  className: PropTypes.string,
  defaultClassName: PropTypes.string,
};

LoginSocialButton.defaultProps = {
  className: null,
  defaultClassName: 'crd-button-social',
};

export default LoginSocialButton;
