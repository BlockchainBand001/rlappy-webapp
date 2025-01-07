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
      className={`btn-${variant} ${variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-black'}`}
    >
      {children}
    </button>
  );
};

export default Button;
