import React from 'react';
// import PropTypes from 'prop-types';
import LoginButton from '../buttons/LoginButton';
import LoginSocialButton from '../buttons/LoginSocialButton';

import '../styles/_login.scss';

const LoginScene = () => (

  <div className="crd-login-scene">

    <div className="crd-login-social">

      <LoginSocialButton
        label="connect with facebook"
        className="crd-btn-fb"
      />

    </div>

    <div className="crd-login-social">

      <LoginButton
        className="crd-btn-sign"
      />

    </div>

  </div>

);

export default LoginScene;
