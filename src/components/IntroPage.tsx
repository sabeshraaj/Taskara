import React, { useState } from 'react';
import { Plus, Users, MessageSquare, CheckSquare } from 'lucide-react';
import CreateTaskModal from './modals/CreateTaskModal';
import CreateUserModal from './modals/CreateUserModal';
import CreateChatModal from './modals/CreateChatModal';

interface IntroPageProps {
  onNavigate: (tab: string) => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ onNavigate }) => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-dark mb-4">
          Welcome back, Sabesh Raaj S!
        </h1>
        <p className="text-primary text-lg">
          What would you like to do today?
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <button
          onClick={() => setIsTaskModalOpen(true)}
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-primary-lighter rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
              <CheckSquare className="h-6 w-6" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-primary-dark mb-2">Create Task</h3>
          <p className="text-primary">Create and assign new tasks to your team</p>
        </button>

        <button
          onClick={() => setIsUserModalOpen(true)}
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-primary-lighter rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-primary-dark mb-2">Create User</h3>
          <p className="text-primary">Add new team members to your workspace</p>
        </button>

        <button
          onClick={() => setIsChatModalOpen(true)}
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-primary-lighter rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
              <MessageSquare className="h-6 w-6" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-primary-dark mb-2">Create Chat</h3>
          <p className="text-primary">Start a new conversation or channel</p>
        </button>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-primary-dark mb-4">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Dashboard', icon: Plus },
            { name: 'Chat', icon: MessageSquare },
            { name: 'Team', icon: Users },
            { name: 'Calendar', icon: Plus },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => onNavigate(item.name.toLowerCase())}
              className="p-4 rounded-lg hover:bg-primary-lighter transition-colors text-primary hover:text-primary-dark"
            >
              <item.icon className="h-6 w-6 mx-auto mb-2" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Modals */}
      <CreateTaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
      />
      <CreateUserModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
      />
      <CreateChatModal
        isOpen={isChatModalOpen}
        onClose={() => setIsChatModalOpen(false)}
      />
    </div>
  );
};

export default IntroPage;