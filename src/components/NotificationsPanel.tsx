import React from 'react';
import { Bell, X, Calendar, MessageSquare, Clock } from 'lucide-react';

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsPanel: React.FC<NotificationsPanelProps> = ({ isOpen, onClose }) => {
  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'New message from Sabari',
      description: 'Hey, can we discuss the project today?',
      time: '5 min ago',
      icon: MessageSquare,
    },
    {
      id: 2,
      type: 'meeting',
      title: 'Team Meeting',
      description: 'Daily standup in 30 minutes',
      time: '25 min ago',
      icon: Calendar,
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-primary-light overflow-hidden">
      <div className="p-4 border-b border-primary-light flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-primary-dark">Notifications</h3>
        </div>
        <button onClick={onClose} className="text-primary hover:text-primary-dark">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className="p-4 border-b border-primary-light hover:bg-primary-lighter transition-colors duration-200"
            >
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-primary-dark">{notification.title}</p>
                  <p className="text-primary text-sm">{notification.description}</p>
                  <p className="text-sm text-primary-light mt-1">{notification.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationsPanel;