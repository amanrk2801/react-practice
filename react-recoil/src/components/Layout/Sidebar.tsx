import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, CheckSquare, Settings, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className={`
      bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform 
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      md:relative md:translate-x-0 transition duration-200 ease-in-out z-20
    `}>
      <div className="flex items-center justify-between mb-6 px-4">
        <span className="text-2xl font-semibold">Menu</span>
        <button onClick={onClose} className="md:hidden">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav>
        <Link to="/" className={`block py-2.5 px-4 rounded transition duration-200 ${isActive('/') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link to="/tasks" className={`block py-2.5 px-4 rounded transition duration-200 ${isActive('/tasks') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <CheckSquare className="inline-block mr-2" size={20} />
          Tasks
        </Link>
        <Link to="/settings" className={`block py-2.5 px-4 rounded transition duration-200 ${isActive('/settings') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <Settings className="inline-block mr-2" size={20} />
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;