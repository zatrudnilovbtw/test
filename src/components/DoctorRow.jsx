import React from 'react';
import AppointmentItem from './AppointmentItem';
import { workingHours } from '../Data';

const DoctorRow = ({ doctor, doctorAppointments }) => {
  return (
    <div className="grid grid-cols-[100px_repeat(13,1fr)] border-b border-gray-200">
      <div className="p-2 border-r border-gray-200 flex flex-col justify-center bg-white">
        <div className="font-medium text-gray-800 truncate">{doctor.name.split(' ')[0]}</div>
        <div className="text-xs text-gray-600">{doctor.specialty}</div>
      </div>
      
      <div className="col-span-13 grid grid-cols-13 relative" style={{ gridTemplateColumns: 'repeat(13, 1fr)' }}>
        {workingHours.map(hour => (
          <div 
            key={hour} 
            className="border-r border-gray-200 h-16 bg-white"
          />
        ))}
        
        {doctorAppointments.map(appointment => (
          <AppointmentItem 
            key={appointment.id} 
            appointment={appointment} 
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorRow; 