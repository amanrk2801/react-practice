import React, { useState } from 'react';
import { useTaskOperations } from '../../hooks/useTaskOperations';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

const TaskForm: React.FC = () => {
  const { addTask } = useTaskOperations();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({
        title: title.trim(),
        description: description.trim(),
        status: 'todo',
        priority: 'medium',
        dueDate: new Date().toISOString().split('T')[0],
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;