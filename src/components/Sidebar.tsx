import React from 'react';
import { MessageSquare, BarChart2, Users, Calendar, Settings, Briefcase, Home } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'intro', icon: Home, label: 'Home' },
    { id: 'dashboard', icon: BarChart2, label: 'Dashboard' },
    { id: 'chat', icon: MessageSquare, label: 'Chat' },
    { id: 'team', icon: Users, label: 'Team' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
  ];

  return (
    <div className="w-64 bg-primary-dark flex flex-col items-start py-6 px-4">
      {/* Logo */}
      <div className="mb-8 px-4 flex items-center space-x-3">
        <Briefcase className="h-8 w-8 text-primary-lighter" />
        <span className="text-primary-lighter text-lg font-semibold">Taskara</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 w-full space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-3 ${
                activeTab === item.id
                  ? 'bg-primary text-primary-lighter'
                  : 'text-primary-light hover:bg-primary hover:text-primary-lighter'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Settings */}
      <button 
        onClick={() => setActiveTab('settings')}
        className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-3 mt-auto
          ${activeTab === 'settings'
            ? 'bg-primary text-primary-lighter'
            : 'text-primary-light hover:bg-primary hover:text-primary-lighter'
          }`}
      >
        <Settings className="h-5 w-5" />
        <span>Settings</span>
      </button>
    </div>
  );
};

export default Sidebar;