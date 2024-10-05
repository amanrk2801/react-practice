import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSearch } from '../features/tasks/tasksSlice';
import { Search } from 'lucide-react';

export const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.tasks.search);

  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  );
};