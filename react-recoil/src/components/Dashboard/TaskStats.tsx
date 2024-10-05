import React from 'react';
import { useRecoilValue } from 'recoil';
import { taskStatsSelector } from '../../recoil/selectors';

const TaskStats: React.FC = () => {
  const stats = useRecoilValue(taskStatsSelector);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Task Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
          <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">{stats.total}</p>
          <p className="text-blue-600 dark:text-blue-300">Total Tasks</p>
        </div>
        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
          <p className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">{stats.todo}</p>
          <p className="text-yellow-600 dark:text-yellow-300">To Do</p>
        </div>
        <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-lg">
          <p className="text-2xl font-bold text-orange-800 dark:text-orange-200">{stats.inProgress}</p>
          <p className="text-orange-600 dark:text-orange-300">In Progress</p>
        </div>
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
          <p className="text-2xl font-bold text-green-800 dark:text-green-200">{stats.done}</p>
          <p className="text-green-600 dark:text-green-300">Done</p>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;