import React from 'react';
import { useRecoilValue } from 'recoil';
import { recentActivitySelector } from '../../recoil/selectors';

const RecentActivity: React.FC = () => {
  const recentTasks = useRecoilValue(recentActivitySelector);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Recent Activity</h2>
      <ul className="space-y-2">
        {recentTasks.map((task) => (
          <li key={task.id} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
            <p className="font-semibold text-gray-800 dark:text-white">{task.title}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Created: {new Date(task.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;