import React, { useState } from 'react';
import { Send, PlusCircle, Hash, User, Calendar } from 'lucide-react';

const ChatSystem: React.FC = () => {
  const [message, setMessage] = useState('');

  const channels = [
    { id: 1, name: 'general', type: 'channel' },
    { id: 2, name: 'development', type: 'channel' },
    { id: 3, name: 'design', type: 'channel' },
  ];

  const directMessages = [
    { id: 1, name: 'Sudharsanan K', status: 'online' },
    { id: 2, name: 'Sabari Srinivas', status: 'offline' },
    { id: 3, name: 'Rathish', status: 'away' },
    { id: 4, name: 'Yogasri', status: 'online' },
    { id: 5, name: 'Tejaswini', status: 'offline' },
    { id: 6, name: 'Sriram M K', status: 'away' }
    
  ];

  return (
    <div className="flex h-full">
      {/* Channels Sidebar */}
      <div className="w-64 bg-primary-dark text-primary-lighter flex flex-col">
        <div className="p-4 border-b border-primary">
          <h2 className="text-lg font-semibold">Channels</h2>
        </div>
        
        {/* Channel List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="space-y-2">
            {channels.map((channel) => (
              <button
                key={channel.id}
                className="flex items-center space-x-2 w-full px-2 py-1 rounded hover:bg-primary text-primary-light hover:text-primary-lighter transition-colors"
              >
                <Hash className="h-4 w-4" />
                <span>{channel.name}</span>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-primary">
            <h3 className="text-sm font-semibold mb-2">Direct Messages</h3>
            {directMessages.map((dm) => (
              <button
                key={dm.id}
                className="flex items-center space-x-2 w-full px-2 py-1 rounded hover:bg-primary text-primary-light hover:text-primary-lighter transition-colors"
              >
                <User className="h-4 w-4" />
                <span>{dm.name}</span>
                <span
                  className={`w-2 h-2 rounded-full ml-auto ${
                    dm.status === 'online'
                      ? 'bg-green-500'
                      : dm.status === 'away'
                      ? 'bg-yellow-500'
                      : 'bg-gray-500'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-primary-light flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Hash className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-primary-dark">general</h2>
          </div>
          <button className="p-2 hover:bg-primary-lighter rounded-lg text-primary">
            <Calendar className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Sample Messages */}
          <div className="flex space-x-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
              alt="User"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="font-semibold text-primary-dark">Sabesh Raaj S</span>
                <span className="text-sm text-primary-light">11:11 AM</span>
              </div>
              <p className="text-primary">Hey team, how's the new feature coming along?</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
              alt="User"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="font-semibold text-primary-dark">Sudharsanan K</span>
                <span className="text-sm text-primary-light">11:21 AM</span>
              </div>
              <p className="text-primary">Working on it, will update soon.</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
              alt="User"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="font-semibold text-primary-dark">Sabesh Raaj S</span>
                <span className="text-sm text-primary-light">11:23 AM</span>
              </div>
              <p className="text-primary">Sabari, how is your code working?</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
              alt="User"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="font-semibold text-primary-dark">Sabari Srinivas A</span>
                <span className="text-sm text-primary-light">11:25 AM</span>
              </div>
              <p className="text-primary">It's working fine, I have updated it in the git repository.</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
              alt="User"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="font-semibold text-primary-dark">Sabesh Raaj S</span>
                <span className="text-sm text-primary-light">11:35 AM</span>
              </div>
              <p className="text-primary">Alright. Tejaswini how is the frontend work going?</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
              alt="User"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="font-semibold text-primary-dark">Tejaswini S</span>
                <span className="text-sm text-primary-light">11:38 AM</span>
              </div>
              <p className="text-primary">Done with templates, waiting for Yogasri to finalize the color palette.</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
              alt="User"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="font-semibold text-primary-dark">Yogasri S</span>
                <span className="text-sm text-primary-light">11:38 AM</span>
              </div>
              <p className="text-primary">Will update about the color palette within today, sorry for the delay.</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
              alt="User"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="font-semibold text-primary-dark">Sabesh Raaj S</span>
                <span className="text-sm text-primary-light">11:45 AM</span>
              </div>
              <p className="text-primary">Okay.</p>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-primary-light">
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-primary-lighter rounded-full text-primary">
              <PlusCircle className="h-5 w-5" />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSystem;