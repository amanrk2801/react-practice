import { atom, atomFamily } from 'recoil';
import { localStorageEffect } from './effects';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  createdAt: number;
}

export const tasksState = atom<Task[]>({
  key: 'tasksState',
  default: [],
  effects: [localStorageEffect('tasks')]
});

export const taskState = atomFamily<Task | null, string>({
  key: 'taskState',
  default: null,
});

export const taskFilterState = atom({
  key: 'taskFilterState',
  default: 'all' as 'all' | 'todo' | 'in-progress' | 'done',
});

export const taskSearchState = atom({
  key: 'taskSearchState',
  default: '',
});

export const themeState = atom<'light' | 'dark'>({
  key: 'themeState',
  default: 'light',
  effects: [localStorageEffect('theme')]
});