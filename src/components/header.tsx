import React from 'react';
import ThemeSwitcher from './themeSwitcher';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        // ...navigation links...
      </nav>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
