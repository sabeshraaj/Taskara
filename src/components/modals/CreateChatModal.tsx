import React, { useState } from 'react';
import { X, Hash, Users } from 'lucide-react';

interface CreateChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateChatModal: React.FC<CreateChatModalProps> = ({ isOpen, onClose }) => {
  const [chatType, setChatType] = useState('channel');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  if (!isOpen) return null;

  const users = [
    { id: '1', name: 'Sarah Wilson' },
    { id: '2', name: 'Mike Johnson' },
    { id: '3', name: 'Anna Smith' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle chat creation logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-primary-dark">Create New Chat</h2>
          <button onClick={onClose} className="text-primary hover:text-primary-dark">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Chat Type
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setChatType('channel')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  chatType === 'channel'
                    ? 'bg-primary text-white'
                    : 'bg-primary-lighter text-primary-dark'
                }`}
              >
                <Hash className="h-4 w-4 mr-2" />
                Channel
              </button>
              <button
                type="button"
                onClick={() => setChatType('direct')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  chatType === 'direct'
                    ? 'bg-primary text-white'
                    : 'bg-primary-lighter text-primary-dark'
                }`}
              >
                <Users className="h-4 w-4 mr-2" />
                Direct Message
              </button>
            </div>
          </div>

          {chatType === 'channel' && (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                  Channel Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-primary mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={3}
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              {chatType === 'channel' ? 'Add Members' : 'Select Users'}
            </label>
            <div className="space-y-2">
              {users.map((user) => (
                <label
                  key={user.id}
                  className="flex items-center space-x-2 p-2 rounded hover:bg-primary-lighter"
                >
                  <input
                    type={chatType === 'channel' ? 'checkbox' : 'radio'}
                    value={user.id}
                    checked={selectedUsers.includes(user.id)}
                    onChange={(e) => {
                      if (chatType === 'channel') {
                        setSelectedUsers(
                          e.target.checked
                            ? [...selectedUsers, user.id]
                            : selectedUsers.filter((id) => id !== user.id)
                        );
                      } else {
                        setSelectedUsers([user.id]);
                      }
                    }}
                    className="text-primary focus:ring-primary"
                  />
                  <span className="text-primary-dark">{user.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-primary hover:bg-primary-lighter rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Create {chatType === 'channel' ? 'Channel' : 'Chat'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateChatModal;