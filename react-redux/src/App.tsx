import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { TaskList } from './components/TaskList';
import { Header } from './components/Header';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { setDarkMode } from './features/ui/uiSlice';
import { X } from 'lucide-react';

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const sidebarOpen = useAppSelector((state) => state.ui.sidebarOpen);

  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0`}
    >
      <div className="p-4">
        <button
          onClick={() => dispatch({ type: 'ui/setSidebarOpen', payload: false })}
          className="md:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
        {/* Add sidebar content here */}
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const darkMode = useAppSelector((state) => state.ui.darkMode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    dispatch(setDarkMode(isDarkMode));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <div className="container mx-auto p-4">
            <Header />
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;