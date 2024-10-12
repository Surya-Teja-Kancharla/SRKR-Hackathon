import React from 'react';
import { Bell, AlertCircle, CheckCircle, Info } from 'lucide-react';

const Notifications: React.FC = () => {
  const notifications = [
    { type: 'alert', title: 'High Blood Pressure', message: 'Your last reading was above normal. Please check again in 30 minutes.', time: '2 hours ago' },
    { type: 'reminder', title: 'Medication Reminder', message: 'It\'s time to take your evening dose of Metformin.', time: '5 hours ago' },
    { type: 'info', title: 'Appointment Scheduled', message: 'Your next check-up with Dr. Smith is on Friday at 2:00 PM.', time: '1 day ago' },
    { type: 'success', title: 'Goal Achieved', message: 'Congratulations! You\'ve met your weekly exercise goal.', time: '2 days ago' },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-6">Notifications & Alerts</h1>
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}
      </div>
    </div>
  );
};

const NotificationItem: React.FC<{ type: string; title: string; message: string; time: string }> = ({ type, title, message, time }) => {
  const getIcon = () => {
    switch (type) {
      case 'alert':
        return <AlertCircle className="text-red-500" />;
      case 'reminder':
        return <Bell className="text-yellow-500" />;
      case 'info':
        return <Info className="text-blue-500" />;
      case 'success':
        return <CheckCircle className="text-green-500" />;
      default:
        return <Bell className="text-gray-500" />;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'alert':
        return 'bg-red-50';
      case 'reminder':
        return 'bg-yellow-50';
      case 'info':
        return 'bg-blue-50';
      case 'success':
        return 'bg-green-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className={`${getBackgroundColor()} p-4 rounded-lg flex items-start`}>
      <div className="flex-shrink-0 mr-4">
        {getIcon()}
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">{message}</p>
        <p className="text-sm text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  );
};

export default Notifications;