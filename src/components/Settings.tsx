import React, { useState } from 'react';
import { User, Moon, Sun, Mail, Key, LogOut } from 'lucide-react';

const Settings: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [name, setName] = useState('Sabesh Raaj S');
  const [email, setEmail] = useState('sabesh@example.com');

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-primary-light">
          <h2 className="text-2xl font-semibold text-primary-dark">Settings</h2>
          <p className="text-primary mt-1">Manage your account settings and preferences</p>
        </div>

        <div className="p-6 space-y-8">
          {/* Profile Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-dark flex items-center">
              <User className="h-5 w-5 mr-2" />
              Profile Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Profile Picture
                </label>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                    alt="Profile"
                    className="h-16 w-16 rounded-full border-2 border-primary"
                  />
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                    Change Photo
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Appearance Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-dark flex items-center">
              {theme === 'light' ? (
                <Sun className="h-5 w-5 mr-2" />
              ) : (
                <Moon className="h-5 w-5 mr-2" />
              )}
              Appearance
            </h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setTheme('light')}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                  theme === 'light'
                    ? 'bg-primary text-white'
                    : 'bg-primary-lighter text-primary-dark'
                }`}
              >
                <Sun className="h-4 w-4" />
                <span>Light</span>
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                  theme === 'dark'
                    ? 'bg-primary text-white'
                    : 'bg-primary-lighter text-primary-dark'
                }`}
              >
                <Moon className="h-4 w-4" />
                <span>Dark</span>
              </button>
            </div>
          </div>

          {/* Security Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-dark flex items-center">
              <Key className="h-5 w-5 mr-2" />
              Security
            </h3>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              Change Password
            </button>
          </div>

          {/* Account Actions */}
          <div className="pt-6 border-t border-primary-light">
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2">
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;