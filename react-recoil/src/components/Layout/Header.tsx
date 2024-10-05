import React from 'react';
import { useRecoilState } from 'recoil';
import { taskSearchState } from '../../recoil/atoms';
import { Input } from '../ui/Input';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [search, setSearch] = useRecoilState(taskSearchState);

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={onMenuClick} className="mr-2 md:hidden">
              <Menu className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </button>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">TaskMaster Pro</h1>
          </div>
          <Input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xs"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;