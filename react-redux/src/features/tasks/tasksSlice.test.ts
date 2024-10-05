import tasksReducer, {
    setFilter,
    setSearch,
    setCurrentPage,
    setItemsPerPage,
    fetchTasks,
    addTask,
    updateTask,
    deleteTask,
    FilterStatus,
  } from './tasksSlice';
  import { Task } from '../../services/api';
  
  // Mock the API calls
  jest.mock('../../services/api', () => ({
    fetchTasks: jest.fn(),
    addTask: jest.fn(),
    updateTask: jest.fn(),
    deleteTask: jest.fn(),
  }));
  
  describe('tasks reducer', () => {
    const initialState = {
      items: [],
      status: 'idle',
      error: null,
      filter: 'all' as FilterStatus,
      search: '',
      currentPage: 1,
      itemsPerPage: 5,
    };
  
    it('should handle initial state', () => {
      expect(tasksReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });
  
    it('should handle setFilter', () => {
      const actual = tasksReducer(initialState, setFilter('active'));
      expect(actual.filter).toEqual('active');
      expect(actual.currentPage).toEqual(1);
    });
  
    it('should handle setSearch', () => {
      const actual = tasksReducer(initialState, setSearch('test search'));
      expect(actual.search).toEqual('test search');
      expect(actual.currentPage).toEqual(1);
    });
  
    it('should handle setCurrentPage', () => {
      const actual = tasksReducer(initialState, setCurrentPage(3));
      expect(actual.currentPage).toEqual(3);
    });
  
    it('should handle setItemsPerPage', () => {
      const actual = tasksReducer(initialState, setItemsPerPage(10));
      expect(actual.itemsPerPage).toEqual(10);
      expect(actual.currentPage).toEqual(1);
    });
  
    it('should handle fetchTasks.pending', () => {
      const action = { type: fetchTasks.pending.type };
      const state = tasksReducer(initialState, action);
      expect(state.status).toEqual('loading');
    });
  
    it('should handle fetchTasks.fulfilled', () => {
      const mockTasks: Task[] = [
        { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
        { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
      ];
      const action = { type: fetchTasks.fulfilled.type, payload: mockTasks };
      const state = tasksReducer(initialState, action);
      expect(state.status).toEqual('succeeded');
      expect(state.items).toEqual(mockTasks);
    });
  
    it('should handle fetchTasks.rejected', () => {
      const action = { type: fetchTasks.rejected.type, error: { message: 'Error fetching tasks' } };
      const state = tasksReducer(initialState, action);
      expect(state.status).toEqual('failed');
      expect(state.error).toEqual('Error fetching tasks');
    });
  
    it('should handle addTask.fulfilled', () => {
      const newTask: Task = { id: 3, title: 'New Task', description: 'New Description', completed: false };
      const action = { type: addTask.fulfilled.type, payload: newTask };
      const state = tasksReducer(initialState, action);
      expect(state.items).toContainEqual(newTask);
    });
  
    it('should handle updateTask.fulfilled', () => {
      const initialStateWithTasks = {
        ...initialState,
        items: [{ id: 1, title: 'Old Title', description: 'Old Description', completed: false }],
      };
      const updatedTask: Task = { id: 1, title: 'Updated Title', description: 'Updated Description', completed: true };
      const action = { type: updateTask.fulfilled.type, payload: updatedTask };
      const state = tasksReducer(initialStateWithTasks, action);
      expect(state.items[0]).toEqual(updatedTask);
    });
  
    it('should handle deleteTask.fulfilled', () => {
      const initialStateWithTasks = {
        ...initialState,
        items: [
          { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
          { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
        ],
      };
      const action = { type: deleteTask.fulfilled.type, payload: 1 };
      const state = tasksReducer(initialStateWithTasks, action);
      expect(state.items).toHaveLength(1);
      expect(state.items[0].id).toEqual(2);
    });
  });
  
  // Test async thunks
  describe('tasks async thunks', () => {
    it('should fetch tasks', async () => {
      const mockTasks: Task[] = [
        { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
        { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
      ];
      const mockApi = require('../../services/api');
      mockApi.fetchTasks.mockResolvedValue(mockTasks);
  
      const dispatch = jest.fn();
      const thunk = fetchTasks();
  
      await thunk(dispatch, () => ({}), undefined);
  
      const { calls } = dispatch.mock;
      expect(calls).toHaveLength(2);
      expect(calls[0][0].type).toBe(fetchTasks.pending.type);
      expect(calls[1][0].type).toBe(fetchTasks.fulfilled.type);
      expect(calls[1][0].payload).toEqual(mockTasks);
    });
  
    it('should add a task', async () => {
      const newTask: Omit<Task, 'id'> = { title: 'New Task', description: 'New Description', completed: false };
      const mockApi = require('../../services/api');
      mockApi.addTask.mockResolvedValue({ id: 3, ...newTask });
  
      const dispatch = jest.fn();
      const thunk = addTask(newTask);
  
      await thunk(dispatch, () => ({}), undefined);
  
      const { calls } = dispatch.mock;
      expect(calls).toHaveLength(2);
      expect(calls[0][0].type).toBe(addTask.pending.type);
      expect(calls[1][0].type).toBe(addTask.fulfilled.type);
      expect(calls[1][0].payload).toEqual({ id: 3, ...newTask });
    });
  
    it('should update a task', async () => {
      const updatedTask: Task = { id: 1, title: 'Updated Task', description: 'Updated Description', completed: true };
      const mockApi = require('../../services/api');
      mockApi.updateTask.mockResolvedValue(updatedTask);
  
      const dispatch = jest.fn();
      const thunk = updateTask(updatedTask);
  
      await thunk(dispatch, () => ({}), undefined);
  
      const { calls } = dispatch.mock;
      expect(calls).toHaveLength(2);
      expect(calls[0][0].type).toBe(updateTask.pending.type);
      expect(calls[1][0].type).toBe(updateTask.fulfilled.type);
      expect(calls[1][0].payload).toEqual(updatedTask);
    });
  
    it('should delete a task', async () => {
      const taskId = 1;
      const mockApi = require('../../services/api');
      mockApi.deleteTask.mockResolvedValue();
  
      const dispatch = jest.fn();
      const thunk = deleteTask(taskId);
  
      await thunk(dispatch, () => ({}), undefined);
  
      const { calls } = dispatch.mock;
      expect(calls).toHaveLength(2);
      expect(calls[0][0].type).toBe(deleteTask.pending.type);
      expect(calls[1][0].type).toBe(deleteTask.fulfilled.type);
      expect(calls[1][0].payload).toEqual(taskId);
    });
  });