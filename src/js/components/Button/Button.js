import React from 'react';
import './button.scss';

const Button = ({ className = '', makeChanges, children }) => (
  <button
    className={className}
    onClick={makeChanges}
    onKeyPress={makeChanges}
    type='button'
  >
    {children}
  </button>
);

export default Button;
