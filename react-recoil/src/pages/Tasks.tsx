import React from 'react';
import TaskList from '../components/Task/TaskList';
import TaskForm from '../components/Task/TaskForm';

const Tasks: React.FC = () => {
  return (
    <div className="space-y-6">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Tasks;