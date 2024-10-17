import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Droplet, Percent, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const handleLogin = () => {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const REDIRECT_URI = 'http://localhost:5173/callback';
    const SCOPE = 'https://www.googleapis.com/auth/userinfo.profile';

    if (!CLIENT_ID) {
      console.error('CLIENT_ID is not defined in .env file');
      return;
    }

    const authUrl = `https://accounts.google.com/o/oauth2/auth?` +
                    `client_id=${CLIENT_ID}&` +
                    `redirect_uri=${REDIRECT_URI}&` +
                    `response_type=code&` +
                    `scope=${encodeURIComponent(SCOPE)}`;

    window.location.href = authUrl;
  };

  // Get the current date
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="flex flex-col items-center space-y-8"> {/* Added space-y-8 for better component spread */}
      <h1 className="text-3xl font-bold mb-12 mt-8">Patient Dashboard</h1>

      {/* Health Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center">
        <DashboardCard
          title="Heart Rate"
          value="72 bpm"
          icon={<Heart className="text-red-500" size={24} />}
          link="/health-metrics"
        />
        <DashboardCard
          title="SpO2"
          value="98%"
          icon={<Droplet className="text-purple-500" size={24} />}
          link="/health-metrics"
        />
        <DashboardCard
          title="Blood Pressure"
          value="120/80 mmHg"
          icon={<Activity className="text-blue-500" size={24} />}
          link="/health-metrics"
        />
        <DashboardCard
          title="Risk Factor"
          value="15% chance"
          icon={<Percent className="text-red-500" size={24} />}
          link="/health-metrics"
        />
      </div>

      {/* Increased gap between rows */}
      <div className="mt-10" /> {/* This div adds extra space */}

      {/* Calendar and Steps/Goals Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <DailyStreakCalendar />
        <StepsCard steps={10000} date={currentDate} />
        <GoalsCard goalsCompleted={2} date={currentDate} />
      </div>

      {/* Google Login Button */}
      <div className="mt-8">
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

// Dashboard Card Component
const DashboardCard: React.FC<{ title: string; value: string; icon: React.ReactNode; link: string }> = ({ title, value, icon, link }) => {
  return (
    <Link
      to={link}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {icon}
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </Link>
  );
};

// Daily Streak Calendar Component
const DailyStreakCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(9); // October
  const [currentYear, setCurrentYear] = useState(2024);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  
  // Start day index for October 2024
  const startDay = new Date(currentYear, currentMonth, 1).getDay();

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
        <span>{`${currentYear}-${currentMonth + 1}`}</span>
        <div>
          <button onClick={handlePreviousMonth} className="mr-2">
            <ChevronLeft />
          </button>
          <button onClick={handleNextMonth}>
            <ChevronRight />
          </button>
        </div>
      </h3>
      <div className="grid grid-cols-7 gap-2 text-center">
        {/* Day indications */}
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="font-bold">{day}</div>
        ))}
        {/* Empty boxes for days before the start of the month */}
        {[...Array(startDay)].map((_, index) => (
          <div key={index} className="w-8 h-8"></div>
        ))}
        {[...Array(daysInMonth)].map((_, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full ${index % 2 === 0 ? 'bg-green-500' : 'bg-red-500'}`}
            title={`Date: ${index + 1}`}
          >
            <span className="text-white">{index + 1}</span> {/* Displaying the date number */}
          </div>
        ))}
      </div>
    </div>
  );
};

// Steps Card Component
const StepsCard: React.FC<{ steps: number; date: string }> = ({ steps, date }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Today's Steps</h3>
      <div className="flex items-center justify-between mb-4">
        <CheckCircle className="text-orange-500" size={24} />
        <p className="text-3xl font-bold">{steps} steps</p>
      </div>
      <div className="flex justify-center items-center mb-2"> {/* Added margin-bottom for better visibility */}
        <div className="relative">
          <div className="w-24 h-24 border-4 border-orange-500 rounded-full flex justify-center items-center">
            <span className="text-lg font-semibold">{steps}</span>
          </div>
        </div>
      </div>
      <p className="text-md text-gray-600 mt-2">Date: {date}</p> {/* Added margin top */}
    </div>
  );
};

// Goals Card Component
const GoalsCard: React.FC<{ goalsCompleted: number; date: string }> = ({ goalsCompleted, date }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Today's Goals</h3>
      <div className="flex items-center justify-between mb-4">
        <CheckCircle className="text-green-500" size={24} />
        <p className="text-3xl font-bold">{goalsCompleted} goals</p>
      </div>
      <div className="flex justify-center items-center mb-2"> {/* Added margin-bottom for better visibility */}
        <div className="relative">
          <div className="w-24 h-24 border-4 border-green-500 rounded-full flex justify-center items-center">
            <span className="text-lg font-semibold">{goalsCompleted}</span>
          </div>
        </div>
      </div>
      <p className="text-md text-gray-600 mt-2">Date: {date}</p> {/* Added margin top */}
    </div>
  );
};

export default Dashboard;
