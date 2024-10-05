import { selector } from 'recoil';
import { tasksState, taskFilterState, taskSearchState } from './atoms';

export const filteredTasksSelector = selector({
  key: 'filteredTasksSelector',
  get: ({get}) => {
    const tasks = get(tasksState);
    const filter = get(taskFilterState);
    const search = get(taskSearchState).toLowerCase();

    return tasks.filter(task => 
      (filter === 'all' || task.status === filter) &&
      (task.title.toLowerCase().includes(search) || task.description.toLowerCase().includes(search))
    );
  },
});

export const taskStatsSelector = selector({
  key: 'taskStatsSelector',
  get: ({get}) => {
    const tasks = get(tasksState);
    return {
      total: tasks.length,
      todo: tasks.filter(t => t.status === 'todo').length,
      inProgress: tasks.filter(t => t.status === 'in-progress').length,
      done: tasks.filter(t => t.status === 'done').length,
    };
  },
});

export const recentActivitySelector = selector({
  key: 'recentActivitySelector',
  get: ({get}) => {
    const tasks = get(tasksState);
    return tasks
      .filter(task => task.status !== 'done')
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(0, 5);
  },
});