import React, { useState } from 'react';
import { MessageSquare, Bell, BarChart2, Users, Calendar, Search } from 'lucide-react';
import ChatSystem from './components/ChatSystem';
import Dashboard from './components/Dashboard';
import Team from './components/Team';
import CalendarView from './components/Calendar';
import Sidebar from './components/Sidebar';
import NotificationsPanel from './components/NotificationsPanel';
import ProfileMenu from './components/ProfileMenu';
import Settings from './components/Settings';
import IntroPage from './components/IntroPage';

function App() {
  const [activeTab, setActiveTab] = useState('intro');
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const getActiveComponent = () => {
    switch (activeTab) {
      case 'intro':
        return <IntroPage onNavigate={setActiveTab} />;
      case 'dashboard':
        return <Dashboard />;
      case 'chat':
        return <ChatSystem />;
      case 'team':
        return <Team />;
      case 'calendar':
        return <CalendarView />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-primary-lighter">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-primary-light px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-primary-dark">
              {activeTab === 'intro' ? 'Home' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="relative">
                <button 
                  className="relative p-2 text-primary hover:text-primary-dark rounded-lg hover:bg-primary-lighter"
                  onClick={() => {
                    setIsNotificationsOpen(!isNotificationsOpen);
                    setIsProfileOpen(false);
                  }}
                >
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    3
                  </span>
                </button>
                <NotificationsPanel 
                  isOpen={isNotificationsOpen} 
                  onClose={() => setIsNotificationsOpen(false)} 
                />
              </div>
              <div className="relative">
                <button
                  className="flex items-center space-x-2 p-1 rounded-lg hover:bg-primary-lighter"
                  onClick={() => {
                    setIsProfileOpen(!isProfileOpen);
                    setIsNotificationsOpen(false);
                  }}
                >
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                    alt="Profile"
                    className="h-8 w-8 rounded-full border-2 border-primary"
                  />
                </button>
                <ProfileMenu 
                  isOpen={isProfileOpen} 
                  onClose={() => setIsProfileOpen(false)} 
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="h-[calc(100vh-73px)] overflow-y-auto">
          {getActiveComponent()}
        </main>
      </div>
    </div>
  );
}

export default App;