import React from 'react';

const AppointmentItem = ({ appointment }) => {
  const { patientName, startTime, endTime } = appointment;
  const duration = endTime - startTime;

  return (
    <div
      className="absolute h-full rounded-md p-2 border-l-4 bg-green-200 border-green-500 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
      style={{
        gridColumn: `${startTime - 8} / span ${duration}`,
        width: '100%'
      }}
    >
      <div className="font-medium text-gray-800 truncate max-w-full text-sm">{patientName}</div>
      <div className="text-xs text-gray-600 truncate">
        {`${startTime}:00 - ${endTime}:00`}
      </div>
    </div>
  );
};

export default AppointmentItem; 