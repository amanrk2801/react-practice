import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { updateTask, deleteTask } from '../features/tasks/tasksSlice';
import { Task } from '../services/api';
import { TaskModal } from './TaskModal';
import { Edit, Trash2, CheckCircle, Circle } from 'lucide-react';

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();

  const handleToggleComplete = () => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <>
      <div className="border dark:border-gray-700 p-4 mb-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button onClick={handleToggleComplete} className="text-gray-500 hover:text-blue-500 transition-colors duration-200">
              {task.completed ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <Circle className="w-6 h-6" />
              )}
            </button>
            <div>
              <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{task.description}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 text-gray-500 hover:text-blue-500 transition-colors duration-200"
            >
              <Edit className="w-5 h-5" />
            </button>
            <button
              onClick={handleDelete}
              className="p-1 text-gray-500 hover:text-red-500 transition-colors duration-200"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {isEditing && <TaskModal task={task} onClose={() => setIsEditing(false)} />}
    </>
  );
};