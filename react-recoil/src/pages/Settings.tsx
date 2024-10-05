import React from 'react';
import ThemeToggle from '../components/Settings/ThemeToggle';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>
      <ThemeToggle />
    </div>
  );
};

export default Settings;