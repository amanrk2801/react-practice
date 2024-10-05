import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api, Task } from '../../services/api';

export type FilterStatus = 'all' | 'active' | 'completed';

interface TasksState {
  items: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  filter: FilterStatus;
  search: string;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: TasksState = {
  items: [],
  status: 'idle',
  error: null,
  filter: 'all',
  search: '',
  currentPage: 1,
  itemsPerPage: 5,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await api.fetchTasks();
  return response;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task: Omit<Task, 'id'>) => {
  const response = await api.addTask(task);
  return response;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async (task: Task) => {
  const response = await api.updateTask(task);
  return response;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id: number) => {
  await api.deleteTask(id);
  return id;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterStatus>) => {
      state.filter = action.payload;
      state.currentPage = 1;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.items.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<Task>) => {
        const index = state.items.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((task) => task.id !== action.payload);
      });
  },
});

export const { setFilter, setSearch, setCurrentPage, setItemsPerPage } = tasksSlice.actions;

export default tasksSlice.reducer;