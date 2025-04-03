import React from 'react';
import { Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sudharsanan K',
      role: 'Backend Developer',
      email: 'sudharsanan@example.com',
      phone: '+91 9000190001',
      location: 'Chennai, India',
      availability: 'Available',
      image: 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg',
      schedule: '9:00 AM - 5:00 PM PST'
    },
    {
      id: 2,
      name: 'Sabari Srinivas A',
      role: 'Senior ML Engineer',
      email: 'sabari@example.com',
      phone: '+91 9000190002',
      location: 'Mumbai, India',
      availability: 'In a meeting',
      image: 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg',
      schedule: '9:00 AM - 5:00 PM EST'
    },
    {
      id: 3,
      name: 'Rathish Manivannan',
      role: 'Research Scientist',
      email: 'rathish@example.com',
      phone: '+91 9000190003',
      location: 'Delhi, India',
      availability: 'Away',
      image: 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg',
      schedule: '9:00 AM - 5:00 PM GMT'
    },
    {
      id: 4,
      name: 'Yogasri S',
      role: 'UI/UX Designer',
      email: 'yogasri@example.com',
      phone: '+91 9000190004',
      location: 'Kolkata, India',
      availability: 'Available',
      image: 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg',
      schedule: '9:00 AM - 5:00 PM GMT'
    },
    {
      id: 5,
      name: 'Tejaswini S',
      role: 'SDE',
      email: 'tejaswini@example.com',
      phone: '+91 9000190005',
      location: 'Bangalore, India',
      availability: 'In a meeting',
      image: 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg',
      schedule: '9:00 AM - 5:00 PM GMT'
    },
    {
      id: 6,
      name: 'Sriram M K',
      role: 'Cybersecurity Analyst',
      email: 'sriram@example.com',
      phone: '+91 9000190006',
      location: 'Noida , India',
      availability: 'Away',
      image: 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg',
      schedule: '9:00 AM - 5:00 PM GMT'
    }
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark">
                    {member.name}
                  </h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center text-primary">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center text-primary">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center text-primary">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center text-primary">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>{member.schedule}</span>
                </div>
              </div>

              <div className="mt-6">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    member.availability === 'Available'
                      ? 'bg-primary-lighter text-primary-dark'
                      : member.availability === 'In a meeting'
                      ? 'bg-primary text-white'
                      : 'bg-primary-light text-primary-dark'
                  }`}
                >
                  {member.availability}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;