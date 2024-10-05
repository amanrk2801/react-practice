import { Task } from '../recoil/atoms';

export const getPriorityColor = (priority: Task['priority']): string => {
  switch (priority) {
    case 'high':
      return 'text-red-500';
    case 'medium':
      return 'text-yellow-500';
    case 'low':
      return 'text-green-500';
    default:
      return 'text-gray-500';
  }
};

export const getPriorityLabel = (priority: Task['priority']): string => {
  return priority.charAt(0).toUpperCase() + priority.slice(1);
};