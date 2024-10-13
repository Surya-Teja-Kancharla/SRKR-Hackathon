import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import PatientProfile from './pages/PatientProfile';
import CarePlan from './pages/CarePlan';
import HealthMetrics from './pages/HealthMetrics';
import Notifications from './pages/Notifications';
import Callback from './pages/Callback'; // Import the Callback component

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<PatientProfile />} />
            <Route path="/care-plan" element={<CarePlan />} />
            <Route path="/health-metrics" element={<HealthMetrics />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/callback" element={<Callback />} /> {/* Add this route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;