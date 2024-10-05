import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../ui/Button';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-700 dark:text-gray-300">Theme:</span>
      <Button onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </Button>
    </div>
  );
};

export default ThemeToggle;