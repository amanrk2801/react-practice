import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTasksSelector } from '../../recoil/selectors';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const filteredTasks = useRecoilValue(filteredTasksSelector);

  return (
    <div className="space-y-4">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;