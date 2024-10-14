import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HealthMetrics: React.FC = () => {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Health Metrics Over Time',
      },
    },
  };

  const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];

  // Data for Blood Pressure
  const bloodPressureData = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: [120, 118, 122, 119, 121, 117],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Diastolic',
        data: [80, 79, 81, 78, 80, 77],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  // Data for Blood Glucose
  const bloodGlucoseData = {
    labels,
    datasets: [
      {
        label: 'Fasting Blood Glucose',
        data: [100, 98, 103, 97, 101, 99],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  // Data for Heart Rate
  const heartRateData = {
    labels,
    datasets: [
      {
        label: 'Heart Rate (bpm)',
        data: [72, 75, 70, 68, 74, 73],
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
      },
    ],
  };

  // Data for Temperature
  const temperatureData = {
    labels,
    datasets: [
      {
        label: 'Body Temperature (°F)',
        data: [98.6, 98.8, 99.0, 98.7, 98.5, 98.9],
        borderColor: 'rgb(255, 206, 86)',
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
      },
    ],
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-6">Health Metrics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Blood Pressure Graph */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Blood Pressure (mmHg)</h2>
          <Line options={chartOptions} data={bloodPressureData} />
        </div>

        {/* Blood Glucose Graph */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Blood Glucose (mg/dL)</h2>
          <Line options={chartOptions} data={bloodGlucoseData} />
        </div>

        {/* Heart Rate Graph */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Heart Rate (bpm)</h2>
          <Line options={chartOptions} data={heartRateData} />
        </div>

        {/* Temperature Graph */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Body Temperature (°F)</h2>
          <Line options={chartOptions} data={temperatureData} />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">AI Analysis</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-blue-700">
            Based on your recent health metrics, our AI system has detected the following trends:
          </p>
          <ul className="list-disc list-inside mt-2 text-blue-600">
            <li>Your blood pressure has shown a slight downward trend, which is positive. Continue with your current medication and lifestyle changes.</li>
            <li>Blood glucose levels have remained stable. Consider increasing physical activity to potentially lower your average glucose levels further.</li>
            <li>
              There's a correlation between your lower blood pressure readings and days with recorded exercise. This supports the benefits of your current exercise routine.
            </li>
            <li>Your heart rate has been stable, indicating good cardiovascular health. Keep monitoring it during physical activities.</li>
            <li>Body temperature readings are normal, with no signs of fever or hypothermia.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthMetrics;
