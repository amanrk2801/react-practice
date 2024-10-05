import React from 'react';
import { useAppSelector } from '../store/hooks';

export const TaskStats: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.items);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const activeTasks = totalTasks - completedTasks;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-lg text-center">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Total Tasks</h3>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-300">{totalTasks}</p>
      </div>
      <div className="bg-green-100 dark:bg-green-800 p-4 rounded-lg text-center">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Completed</h3>
        <p className="text-2xl font-bold text-green-600 dark:text-green-300">{completedTasks}</p>
      </div>
      <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded-lg text-center">
        <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">Active</h3>
        <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-300">{activeTasks}</p>
      </div>
    </div>
  );
};