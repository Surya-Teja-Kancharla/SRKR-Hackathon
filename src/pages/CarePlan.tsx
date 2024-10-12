import React from 'react';
import { Pill, Utensils, Activity, Sun } from 'lucide-react';

const CarePlan: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-6">Adaptive Care Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CarePlanSection
          title="Medication Schedule"
          icon={<Pill className="text-blue-500" size={24} />}
          items={[
            { time: '8:00 AM', description: 'Metformin 500mg' },
            { time: '1:00 PM', description: 'Lisinopril 10mg' },
            { time: '8:00 PM', description: 'Metformin 500mg' },
          ]}
        />
        <CarePlanSection
          title="Dietary Recommendations"
          icon={<Utensils className="text-green-500" size={24} />}
          items={[
            { description: 'Limit carbohydrate intake to 45-60g per meal' },
            { description: 'Increase fiber intake to 25-30g per day' },
            { description: 'Reduce sodium intake to less than 2,300mg per day' },
          ]}
        />
        <CarePlanSection
          title="Exercise Routine"
          icon={<Activity className="text-red-500" size={24} />}
          items={[
            { description: '30 minutes of brisk walking, 5 days a week' },
            { description: 'Strength training exercises, 2-3 times a week' },
            { description: 'Gentle yoga or stretching, 2-3 times a week' },
          ]}
        />
        <CarePlanSection
          title="Lifestyle Adjustments"
          icon={<Sun className="text-yellow-500" size={24} />}
          items={[
            { description: 'Practice stress-reduction techniques daily' },
            { description: 'Ensure 7-8 hours of quality sleep each night' },
            { description: 'Monitor blood glucose levels before meals' },
          ]}
        />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">AI-Driven Recommendations</h2>
        <p className="text-gray-700 mb-4">
          Based on your recent health metrics and lifestyle data, our AI system suggests the following adjustments to your care plan:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Consider increasing your daily water intake to 8-10 glasses, as your recent metrics show signs of mild dehydration.</li>
          <li>Your blood pressure readings have been slightly elevated. Try incorporating 10-minute meditation sessions twice daily to help manage stress and potentially lower blood pressure.</li>
          <li>Recent glucose readings suggest benefit from splitting your current Metformin dose. Consult with your doctor about taking 250mg in the morning and 250mg in the evening instead of 500mg once daily.</li>
        </ul>
      </div>
    </div>
  );
};

const CarePlanSection: React.FC<{ title: string; icon: React.ReactNode; items: { time?: string; description: string }[] }> = ({ title, icon, items }) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex">
            {item.time && <span className="font-medium mr-2">{item.time}</span>}
            <span>{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarePlan;