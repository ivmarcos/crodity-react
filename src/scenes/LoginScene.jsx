import React from 'react';
// import PropTypes from 'prop-types';
import LoginButton from '../buttons/LoginButton';
import LoginSocialButton from '../buttons/LoginSocialButton';

import '../styles/_login.scss';

const LoginScene = () => (

  <div className="crd-login-scene">

    <div className="crd-login-social">

      <LoginSocialButton
        label="Facebook"
      />

    </div>

    <div className="crd-login-social">

      <LoginButton
        label="Login"
      />

    </div>

  </div>

);

export default LoginScene;
