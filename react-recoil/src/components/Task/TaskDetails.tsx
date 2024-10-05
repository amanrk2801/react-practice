import React from 'react';
import { Task } from '../../recoil/atoms';
import { Button } from '../ui/Button';
import { formatDateTime } from '../../utils/dateFormatter';
import { getPriorityColor, getPriorityLabel } from '../../utils/taskPriority';

interface TaskDetailsProps {
  task: Task;
  onStatusChange: (newStatus: Task['status']) => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ task, onStatusChange }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{task.title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{task.description}</p>
      <p>Status: <span className="font-semibold">{task.status}</span></p>
      <p>Priority: <span className={`font-semibold ${getPriorityColor(task.priority)}`}>{getPriorityLabel(task.priority)}</span></p>
      <p>Due Date: <span className="font-semibold">{formatDateTime(task.dueDate)}</span></p>
      <p>Created: <span className="font-semibold">{formatDateTime(task.createdAt)}</span></p>
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => onStatusChange('todo')} disabled={task.status === 'todo'}>
          Set To Do
        </Button>
        <Button onClick={() => onStatusChange('in-progress')} disabled={task.status === 'in-progress'}>
          Set In Progress
        </Button>
        <Button onClick={() => onStatusChange('done')} disabled={task.status === 'done'}>
          Set Done
        </Button>
      </div>
    </div>
  );
};

export default TaskDetails;