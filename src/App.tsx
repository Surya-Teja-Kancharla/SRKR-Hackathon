import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import PatientProfile from './pages/Profile';
import CarePlan from './pages/CarePlan';
import HealthMetrics from './pages/HealthMetrics';
import Login from './pages/Login'; // Import the Login component
import SignUp from './pages/Signup'; // Import the SignUp component
import Notifications from './pages/Notifications';
import Callback from './pages/Callback'; // Import the Callback component

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-100">
                <Routes>
                    <Route 
                        path="/" 
                        element={<Login />} 
                    />
                    <Route 
                        path="/signup" 
                        element={<SignUp />} // Add the route for SignUp
                    />
                    <Route 
                        path="/dashboard" 
                        element={
                            <>
                                <Header />
                                <main className="flex-grow container mx-auto px-4 py-8">
                                    <Dashboard />
                                </main>
                                <Footer />
                            </>
                        } 
                    />
                    <Route 
                        path="/profile" 
                        element={
                            <>
                                <Header />
                                <main className="flex-grow container mx-auto px-4 py-8">
                                    <PatientProfile />
                                </main>
                                <Footer />
                            </>
                        } 
                    />
                    <Route 
                        path="/care-plan" 
                        element={
                            <>
                                <Header />
                                <main className="flex-grow container mx-auto px-4 py-8">
                                    <CarePlan />
                                </main>
                                <Footer />
                            </>
                        } 
                    />
                    <Route 
                        path="/health-metrics" 
                        element={
                            <>
                                <Header />
                                <main className="flex-grow container mx-auto px-4 py-8">
                                    <HealthMetrics />
                                </main>
                                <Footer />
                            </>
                        } 
                    />
                    <Route 
                        path="/notifications" 
                        element={
                            <>
                                <Header />
                                <main className="flex-grow container mx-auto px-4 py-8">
                                    <Notifications />
                                </main>
                                <Footer />
                            </>
                        } 
                    />
                    <Route 
                        path="/callback" 
                        element={
                            <>
                                <Header />
                                <main className="flex-grow container mx-auto px-4 py-8">
                                    <Callback />
                                </main>
                                <Footer />
                            </>
                        } 
                    /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;