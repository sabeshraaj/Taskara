import React, { useState } from 'react';
import { X, Users, Hash } from 'lucide-react';

interface CreateChatFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateChatForm: React.FC<CreateChatFormProps> = ({ isOpen, onClose }) => {
  const [chatType, setChatType] = useState<'channel' | 'direct'>('channel');
  const [channelName, setChannelName] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle chat creation logic here
    console.log({
      type: chatType,
      name: channelName,
      users: selectedUsers,
      description,
    });
    onClose();
  };

  const users = [
    'Sarah Wilson',
    'Mike Johnson',
    'Anna Smith',
    'John Doe',
    'Jane Smith',
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-primary-dark">Create New Chat</h2>
          <button onClick={onClose} className="text-primary hover:text-primary-dark">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4 mb-4">
            <button
              type="button"
              onClick={() => setChatType('channel')}
              className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center space-x-2 ${
                chatType === 'channel'
                  ? 'bg-primary text-white'
                  : 'bg-primary-lighter text-primary-dark'
              }`}
            >
              <Hash className="h-5 w-5" />
              <span>Channel</span>
            </button>
            <button
              type="button"
              onClick={() => setChatType('direct')}
              className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center space-x-2 ${
                chatType === 'direct'
                  ? 'bg-primary text-white'
                  : 'bg-primary-lighter text-primary-dark'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Direct Message</span>
            </button>
          </div>

          {chatType === 'channel' && (
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Channel Name
              </label>
              <input
                type="text"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                className="w-full px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              {chatType === 'channel' ? 'Add Members' : 'Select Users'}
            </label>
            <select
              multiple
              value={selectedUsers}
              onChange={(e) => setSelectedUsers(Array.from(e.target.selectedOptions, option => option.value))}
              className="w-full px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            >
              {users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
            <p className="text-xs text-primary mt-1">Hold Ctrl/Cmd to select multiple users</p>
          </div>

          {chatType === 'channel' && (
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={3}
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            {chatType === 'channel' ? 'Create Channel' : 'Start Conversation'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateChatForm;