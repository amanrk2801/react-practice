import React from 'react';
import TaskStats from '../components/Dashboard/TaskStats';
import RecentActivity from '../components/Dashboard/RecentActivity';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TaskStats />
      <RecentActivity />
    </div>
  );
};

export default Dashboard;