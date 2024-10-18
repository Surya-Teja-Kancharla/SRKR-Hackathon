import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Brain, Clipboard, BarChart2, Bell } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Brain className="w-12 h-12 text-blue-500" />}
            title="AI-Powered Insights"
            description="Our advanced AI analyzes your health data to provide personalized recommendations and adjust your care plan in real-time."
          />
          <FeatureCard
            icon={<Clipboard className="w-12 h-12 text-green-500" />}
            title="Dynamic Care Plans"
            description="Receive adaptive care plans that evolve with your health status, ensuring you always have the most effective treatment strategy."
          />
          <FeatureCard
            icon={<BarChart2 className="w-12 h-12 text-purple-500" />}
            title="Health Metrics Tracking"
            description="Easily monitor your vital health metrics with intuitive charts and graphs, helping you stay informed about your progress."
          />
          <FeatureCard
            icon={<Bell className="w-12 h-12 text-yellow-500" />}
            title="Smart Notifications"
            description="Get timely reminders and alerts for medications, appointments, and important health updates tailored to your specific needs."
          />
          <FeatureCard
            icon={<Activity className="w-12 h-12 text-red-500" />}
            title="Comprehensive Dashboard"
            description="Access all your health information in one place with our user-friendly dashboard, designed for easy navigation and understanding."
          />
        </div>

        <div className="text-center">
          <Link 
            to="/login" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default LandingPage;
