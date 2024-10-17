import React from 'react';
import { User, Phone, Mail, MapPin, Calendar } from 'lucide-react';

const PatientProfile: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-6">Patient Profile</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Patient"
            className="rounded-full w-48 h-48 object-cover mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-2xl font-semibold mb-4">Jane Doe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProfileItem icon={<User />} label="Age" value="42" />
            <ProfileItem icon={<Phone />} label="Phone" value="(555) 123-4567" />
            <ProfileItem icon={<Mail />} label="Email" value="jane.doe@example.com" />
            <ProfileItem icon={<MapPin />} label="Address" value="123 Main St, Anytown, USA" />
            <ProfileItem icon={<Calendar />} label="Date of Birth" value="January 15, 1982" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Medical Conditions</h3>
        <ul className="list-disc list-inside">
          <li>Type 2 Diabetes</li>
          <li>Hypertension</li>
          <li>Osteoarthritis</li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Current Medications</h3>
        <ul className="list-disc list-inside">
          <li>Metformin 500mg twice daily</li>
          <li>Lisinopril 10mg once daily</li>
          <li>Acetaminophen 500mg as needed for pain</li>
        </ul>
      </div>
    </div>
  );
};

const ProfileItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center">
      <div className="mr-2">{icon}</div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

export default PatientProfile;