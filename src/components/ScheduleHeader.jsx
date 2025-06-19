import React from 'react';
import { workingHours } from '../Data';

const ScheduleHeader = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Расписание клиники</h1>
        <div className="text-xl font-medium text-blue-600 capitalize">{formattedDate}</div>
      </div>

      <div className="grid grid-cols-[100px_repeat(13,1fr)] border-b border-gray-200">
        <div className="p-2 font-semibold text-gray-700 bg-gray-50">Врач</div>
        {workingHours.map(hour => (
          <div key={hour} className="p-2 text-center font-semibold text-gray-700 bg-gray-50">
            {`${hour}:00`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleHeader; 