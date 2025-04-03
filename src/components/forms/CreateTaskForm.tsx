import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CreateTaskFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ isOpen, onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [team, setTeam] = useState<string[]>([]);
  const [date, setDate] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle task creation logic here
    console.log({ taskName, team, date });
    onClose();
  };

  const teamOptions = [
    'Development',
    'Design',
    'Marketing',
    'Sales',
    'Management'
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-primary-dark">Create New Task</h2>
          <button onClick={onClose} className="text-primary hover:text-primary-dark">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Task Name
            </label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="w-full px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Team Involved
            </label>
            <select
              multiple
              value={team}
              onChange={(e) => setTeam(Array.from(e.target.selectedOptions, option => option.value))}
              className="w-full px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            >
              {teamOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <p className="text-xs text-primary mt-1">Hold Ctrl/Cmd to select multiple teams</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Due Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskForm;