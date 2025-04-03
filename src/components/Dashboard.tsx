import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Dashboard: React.FC = () => {
  // Sample data for charts
  const pendingTasks = [
    { priority: 'High', tasks: 12 },
    { priority: 'Medium', tasks: 18 },
    { priority: 'Low', tasks: 8 },
  ];

  const performanceData = [
    { month: 'Jan', performance: 65 },
    { month: 'Feb', performance: 75 },
    { month: 'Mar', performance: 85 },
    { month: 'Apr', performance: 82 },
    { month: 'May', performance: 90 },
  ];

  const completedTasks = [
    { month: 'Jan', bugs: 20, features: 15, docs: 10 },
    { month: 'Feb', bugs: 15, features: 20, docs: 12 },
    { month: 'Mar', bugs: 25, features: 18, docs: 15 },
    { month: 'Apr', bugs: 18, features: 22, docs: 14 },
    { month: 'May', bugs: 22, features: 25, docs: 18 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pending Work Tracker */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Pending Work by Priority</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={pendingTasks}
              cx={200}
              cy={150}
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              dataKey="tasks"
              nameKey="priority"
              label
            >
              {pendingTasks.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Performance Improvement Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Performance Trends</h2>
          <LineChart width={400} height={300} data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="performance" stroke="#8884d8" />
          </LineChart>
        </div>

        {/* Completed Work Overview */}
        <div className="bg-white p-6 rounded-xl shadow-sm col-span-2">
          <h2 className="text-lg font-semibold mb-4">Completed Tasks Overview</h2>
          <BarChart width={800} height={300} data={completedTasks}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="bugs" stackId="a" fill="#8884d8" />
            <Bar dataKey="features" stackId="a" fill="#82ca9d" />
            <Bar dataKey="docs" stackId="a" fill="#ffc658" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;