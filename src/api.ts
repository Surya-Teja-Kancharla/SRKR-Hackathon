import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchPatientData = async (patientId: string) => {
  try {
    const response = await api.get(`/patients/${patientId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching patient data:', error);
    throw error;
  }
};

export const updateCarePlan = async (patientId: string, carePlan: any) => {
  try {
    const response = await api.put(`/patients/${patientId}/care-plan`, carePlan);
    return response.data;
  } catch (error) {
    console.error('Error updating care plan:', error);
    throw error;
  }
};

export const submitHealthMetrics = async (patientId: string, metrics: any) => {
  try {
    const response = await api.post(`/patients/${patientId}/health-metrics`, metrics);
    return response.data;
  } catch (error) {
    console.error('Error submitting health metrics:', error);
    throw error;
  }
};

export const fetchNotifications = async (patientId: string) => {
  try {
    const response = await api.get(`/patients/${patientId}/notifications`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};

export default api;