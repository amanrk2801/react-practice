import { useRecoilCallback } from 'recoil';
import { tasksState, taskState, Task } from '../recoil/atoms';
import { generateId } from '../utils/idGenerator';

export const useTaskOperations = () => {
  const addTask = useRecoilCallback(({ set }) => (newTask: Omit<Task, 'id' | 'createdAt'>) => {
    const task: Task = {
      ...newTask,
      id: generateId(),
      createdAt: Date.now(),
    };
    set(tasksState, (oldTasks) => [...oldTasks, task]);
    set(taskState(task.id), task);
  });

  const updateTask = useRecoilCallback(({ set }) => (updatedTask: Task) => {
    set(tasksState, (oldTasks) =>
      oldTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    set(taskState(updatedTask.id), updatedTask);
  });

  const deleteTask = useRecoilCallback(({ set }) => (id: string) => {
    set(tasksState, (oldTasks) => oldTasks.filter((task) => task.id !== id));
    set(taskState(id), null);
  });

  return { addTask, updateTask, deleteTask };
};