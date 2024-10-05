import React, { useState } from 'react';
import { Task } from '../../recoil/atoms';
import { useTaskOperations } from '../../hooks/useTaskOperations';
import { Button } from '../ui/Button';
import TaskDetails from './TaskDetails';
import Modal from '../ui/Modal';
import { formatDate } from '../../utils/dateFormatter';
import { getPriorityColor, getPriorityLabel } from '../../utils/taskPriority';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { updateTask, deleteTask } = useTaskOperations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStatusChange = (newStatus: Task['status']) => {
    updateTask({ ...task, status: newStatus });
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{task.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{task.description}</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className={`text-sm ${getPriorityColor(task.priority)}`}>
              {getPriorityLabel(task.priority)}
            </span>
            <span className="text-sm text-gray-500">Due: {formatDate(task.dueDate)}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button onClick={() => setIsModalOpen(true)}>View</Button>
          <Button onClick={() => deleteTask(task.id)} variant="danger">Delete</Button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TaskDetails task={task} onStatusChange={handleStatusChange} />
      </Modal>
    </>
  );
};

export default TaskItem;