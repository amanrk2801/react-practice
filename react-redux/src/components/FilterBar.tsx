import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setFilter, FilterStatus } from '../features/tasks/tasksSlice';

export const FilterBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.tasks.filter);

  const filters: FilterStatus[] = ['all', 'active', 'completed'];

  return (
    <div className="flex space-x-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => dispatch(setFilter(filter))}
          className={`px-3 py-1 rounded-full transition-colors duration-200 ${
            currentFilter === filter
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};