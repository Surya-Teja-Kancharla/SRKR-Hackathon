import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import PatientProfile from './pages/PatientProfile'; // Ensure correct import
import CarePlan from './pages/CarePlan';
import HealthMetrics from './pages/HealthMetrics';
import Notifications from './pages/Notifications';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/patient-profile" element={<PatientProfile />} />
            <Route path="/care-plan" element={<CarePlan />} />
            <Route path="/health-metrics" element={<HealthMetrics />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
