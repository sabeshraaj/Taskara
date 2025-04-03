import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users } from 'lucide-react';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const meetings = [
    {
      id: 1,
      title: 'Team Standup',
      time: '09:00 AM',
      attendees: ['Sarah Wilson', 'Mike Johnson', 'Anna Smith'],
      day: 15,
    },
    {
      id: 1,
      title: 'Holiday',
      time: 'All Day',
      attendees: ['Sarah Wilson', 'Mike Johnson', 'Anna Smith','A','B','C'],
      day: 7,
    },
    {
      id: 2,
      title: 'Project Review',
      time: '02:00 PM',
      attendees: ['John Doe', 'Sarah Wilson'],
      day: 18,
    },
    {
      id: 3,
      title: 'Client Meeting',
      time: '11:00 AM',
      attendees: ['Mike Johnson', 'Anna Smith'],
      day: 21,
    },
    {
      id: 3,
      title: 'Team Lunch',
      time: '12:00 AM',
      attendees: ['Mike Johnson', 'Anna Smith','A','A','A','A'],
      day: 30,
    }
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return (
    <div className="flex h-full">
      {/* Calendar Grid */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-primary-dark">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-primary-lighter rounded-lg text-primary-dark"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-primary-lighter rounded-lg text-primary-dark"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {days.map((day) => (
              <div
                key={day}
                className="text-center text-sm font-semibold text-primary-dark py-2"
              >
                {day}
              </div>
            ))}
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div key={`empty-${index}`} className="h-24 p-2" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const dayMeetings = meetings.filter((meeting) => meeting.day === day);
              return (
                <div
                  key={day}
                  className={`h-24 p-2 border border-primary-lighter rounded-lg ${
                    dayMeetings.length > 0 ? 'bg-primary-lighter' : ''
                  }`}
                >
                  <span className="text-sm text-primary-dark">{day}</span>
                  <div className="space-y-1 mt-1">
                    {dayMeetings.map((meeting) => (
                      <div
                        key={meeting.id}
                        className="bg-primary p-1 rounded text-white text-xs"
                      >
                        {meeting.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Upcoming Meetings */}
      <div className="w-80 bg-white p-6 border-l border-primary-lighter">
        <h3 className="text-lg font-semibold text-primary-dark mb-4">
          Events
        </h3>
        <div className="space-y-4">
          {meetings.map((meeting) => (
            <div
              key={meeting.id}
              className="p-4 rounded-lg bg-primary-lighter"
            >
              <h4 className="font-semibold text-primary-dark">{meeting.title}</h4>
              <div className="flex items-center text-primary mt-2">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">April {meeting.day}, {meeting.time}</span>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;