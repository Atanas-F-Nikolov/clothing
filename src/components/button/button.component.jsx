import React from 'react';

import './button.styles.scss';

const Button = ({ children, isGoogleSignIn, ...rest }) => (
  <button className={`button ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...rest}>
    {children}
  </button>
);

export default Button;
