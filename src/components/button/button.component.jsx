import React from 'react';

import './button.styles.scss';

const Button = ({ children, isGoogleSignIn, inverted, ...rest }) => (
  <button
    className={`button ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
