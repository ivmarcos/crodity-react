import React from 'react';
import PropTypes from 'prop-types';

import LoginButton from './LoginButton';

const LoginSocialButton = ({ className, ...props }) => (

  <LoginButton
    className={className}
    {...props}
  />

);

LoginSocialButton.propTypes = {
  className: PropTypes.string,
};

LoginSocialButton.defaultProps = {
  className: null,
};

export default LoginSocialButton;
