
import React, { useState, useEffect } from 'react';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.className = theme === 'dark' ? 'theme-dark' : 'theme-light';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme} className="text-gray-700 hover:text-green-500">
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeSwitcher;