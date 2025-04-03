import React from 'react';
import { User, Settings, LogOut } from 'lucide-react';

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-primary-light overflow-hidden">
      <div className="p-4 border-b border-primary-light">
        <p className="font-semibold text-primary-dark">Sabesh Raaj S</p>
        <p className="text-sm text-primary">sabesh@example.com</p>
      </div>
      
      <div className="py-2">
        <button className="w-full px-4 py-2 text-left flex items-center space-x-3 hover:bg-primary-lighter text-primary">
          <User className="h-5 w-5" />
          <span>Profile</span>
        </button>
        <button className="w-full px-4 py-2 text-left flex items-center space-x-3 hover:bg-primary-lighter text-primary">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </button>
        <button className="w-full px-4 py-2 text-left flex items-center space-x-3 hover:bg-primary-lighter text-primary">
          <LogOut className="h-5 w-5" />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;