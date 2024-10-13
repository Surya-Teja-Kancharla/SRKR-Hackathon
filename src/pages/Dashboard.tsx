import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Thermometer, Droplet } from 'lucide-react';

const Dashboard: React.FC = () => {
  const handleLogin = () => {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID; // Access the Client ID from .env
    const REDIRECT_URI = 'http://localhost:5173/callback'; // Your redirect URI
    const SCOPE = 'https://www.googleapis.com/auth/userinfo.profile'; // Scopes you need

    // Check if CLIENT_ID is available
    if (!CLIENT_ID) {
      console.error("CLIENT_ID is not defined in .env file");
      return;
    }

    const authUrl = `https://accounts.google.com/o/oauth2/auth?` +
                    `client_id=${CLIENT_ID}&` +
                    `redirect_uri=${REDIRECT_URI}&` +
                    `response_type=code&` +
                    `scope=${encodeURIComponent(SCOPE)}`;

    window.location.href = authUrl; // Redirect the user to Google for authorization
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Patient Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Heart Rate"
          value="72 bpm"
          icon={<Heart className="text-red-500" size={24} />}
          link="/health-metrics"
        />
        <DashboardCard
          title="Blood Pressure"
          value="120/80 mmHg"
          icon={<Activity className="text-blue-500" size={24} />}
          link="/health-metrics"
        />
        <DashboardCard
          title="Temperature"
          value="98.6 °F"
          icon={<Thermometer className="text-yellow-500" size={24} />}
          link="/health-metrics"
        />
        <DashboardCard
          title="Blood Glucose"
          value="100 mg/dL"
          icon={<Droplet className="text-green-500" size={24} />}
          link="/health-metrics"
        />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Notifications</h2>
        <ul className="bg-white shadow rounded-lg divide-y divide-gray-200">
          <NotificationItem
            title="Medication Reminder"
            description="Take your blood pressure medication at 2:00 PM"
            time="1 hour ago"
          />
          <NotificationItem
            title="Appointment Scheduled"
            description="Follow-up with Dr. Smith on Friday at 10:00 AM"
            time="3 hours ago"
          />
          <NotificationItem
            title="Health Tip"
            description="Remember to stay hydrated throughout the day"
            time="5 hours ago"
          />
        </ul>
      </div>
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

const DashboardCard: React.FC<{ title: string; value: string; icon: React.ReactNode; link: string }> = ({ title, value, icon, link }) => {
  return (
    <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {icon}
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </Link>
  );
};

const NotificationItem: React.FC<{ title: string; description: string; time: string }> = ({ title, description, time }) => {
  return (
    <li className="p-4 hover:bg-gray-50">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-600">{description}</p>
      <p className="text-sm text-gray-400 mt-1">{time}</p>
    </li>
  );
};

export default Dashboard;
