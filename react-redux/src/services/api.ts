export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  }
  
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  
  export const api = {
    async fetchTasks(): Promise<Task[]> {
      await delay(500);
      return JSON.parse(localStorage.getItem('tasks') || '[]');
    },
    async addTask(task: Omit<Task, 'id'>): Promise<Task> {
      await delay(500);
      const newTask: Task = { ...task, id: Date.now() };
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return newTask;
    },
    async updateTask(task: Task): Promise<Task> {
      await delay(500);
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const index = tasks.findIndex((t: Task) => t.id === task.id);
      if (index === -1) throw new Error('Task not found');
      tasks[index] = task;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return task;
    },
    async deleteTask(id: number): Promise<void> {
      await delay(500);
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const filteredTasks = tasks.filter((t: Task) => t.id !== id);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    },
  };