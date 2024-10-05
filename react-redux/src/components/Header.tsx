import React from 'react';
import { DarkModeToggle } from './DarkModeToggle';
import { useAppDispatch } from '../store/hooks';
import { toggleSidebar } from '../features/ui/uiSlice';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <header className="flex justify-between items-center mb-8 py-4">
      <div className="flex items-center">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="mr-4 md:hidden text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold">Task Manager</h1>
      </div>
      <DarkModeToggle />
    </header>
  );
};