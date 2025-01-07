import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button 
      onClick={onClick}
      className={`btn-${variant}`}
    >
      {children}
    </button>
  );
};

export default Button;
