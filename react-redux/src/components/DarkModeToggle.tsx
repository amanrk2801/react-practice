import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleDarkMode } from '../features/ui/uiSlice';
import { Moon, Sun } from 'lucide-react';

export const DarkModeToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.ui.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};