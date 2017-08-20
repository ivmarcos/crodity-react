import React from 'react';
import PropTypes from 'prop-types';
import LoginButton from './LoginButton';
import RoundFontIcon from '../icons/RoundFontIcon';

const DEFAULT_CLASSNAME_PREFIX = 'crd-btn-login';

const TypeInfo = {
  facebook: {
    className: `${DEFAULT_CLASSNAME_PREFIX}-facebook`,
    iconClassName: 'fa fa-facebook',
  },
  twitter: {
    className: `${DEFAULT_CLASSNAME_PREFIX}-twitter`,
    iconClassName: 'fa fa-twitter',
  },
  email: {
    className: `${DEFAULT_CLASSNAME_PREFIX}-email`,
    iconClassName: 'fa fa-envelope-o',
  },
};

const LoginSocialButton = ({ type, className, iconClassName, withIcon, children, ...props }) => {

  const typeInfo = TypeInfo[type] || {};

  const icon = withIcon ? <RoundFontIcon className={iconClassName || typeInfo.iconClassName} /> : null;

  const buttonClassName = [DEFAULT_CLASSNAME_PREFIX, typeInfo.className, className].map(c => c || '').join(' ');

  return (
    <LoginButton
      className={buttonClassName}
      {...props}
    >
      {icon}
      {children}
    </LoginButton>
  );

};

LoginSocialButton.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  type: PropTypes.oneOf(['twitter', 'facebook', 'email']),
  withIcon: PropTypes.bool,
  children: PropTypes.node,
};

LoginSocialButton.defaultProps = {
  className: null,
  iconClassName: null,
  withIcon: false,
  children: null,
};

// render once
LoginSocialButton.shouldComponentUpdate = () => false;

export default LoginSocialButton;
