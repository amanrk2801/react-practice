import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchTasks } from '../features/tasks/tasksSlice';
import { TaskItem } from './TaskItem';
import { TaskModal } from './TaskModal';
import { FilterBar } from './FilterBar';
import { SearchBar } from './SearchBar';
import { Pagination } from './Pagination';
import { TaskStats } from './TaskStats';
import { Plus } from 'lucide-react';

export const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.items);
  const status = useAppSelector((state) => state.tasks.status);
  const error = useAppSelector((state) => state.tasks.error);
  const filter = useAppSelector((state) => state.tasks.filter);
  const search = useAppSelector((state) => state.tasks.search);
  const currentPage = useAppSelector((state) => state.tasks.currentPage);
  const itemsPerPage = useAppSelector((state) => state.tasks.itemsPerPage);
  const [isAddingTask, setIsAddingTask] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === 'all' || (filter === 'active' && !task.completed) || (filter === 'completed' && task.completed);
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const paginatedTasks = filteredTasks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  if (status === 'loading') {
    return <div className="text-center">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center text-re d-500">Error: {error}</div>;
  }

  return (
    <div>
      <TaskStats />
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
        <FilterBar />
        <button
          onClick={() => setIsAddingTask(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 flex items-center"
        >
          <Plus className="w-5 h-5 mr-1" /> Add Task
        </button>
      </div>
      <SearchBar />
      {paginatedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <Pagination totalItems={filteredTasks.length} />
      {isAddingTask && <TaskModal onClose={() => setIsAddingTask(false)} />}
    </div>
  );
};