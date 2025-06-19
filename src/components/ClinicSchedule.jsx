import React, { useState } from 'react';
import ScheduleHeader from './ScheduleHeader';
import DoctorRow from './DoctorRow';
import { doctors, appointments } from '../Data';

const ClinicSchedule = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filteredDoctors = selectedDoctor
    ? doctors.filter(doctor => doctor.id === selectedDoctor)
    : doctors;

  const getFilteredAppointments = (doctorId) => {
    return appointments.filter(app => app.doctorId === doctorId);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-6 p-4 bg-white rounded-lg shadow-sm flex flex-wrap gap-4 items-end">
        <div className="min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">Фильтр по врачу</label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedDoctor || ''}
            onChange={(e) => setSelectedDoctor(e.target.value ? Number(e.target.value) : null)}
          >
            <option value="">Все врачи</option>
            {doctors.map(doctor => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} ({doctor.specialty})
              </option>
            ))}
          </select>
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => {
            setSelectedDoctor(null);
          }}
        >
          Сбросить фильтры
        </button>
      </div>

      <div className="bg-white rounded-t-lg shadow-sm">
        <ScheduleHeader />
      </div>

      <div className="overflow-x-auto pb-4 rounded-b-lg shadow-sm">
        <div className="min-w-[1200px]">
          {filteredDoctors.map(doctor => (
            <DoctorRow
              key={doctor.id}
              doctor={doctor}
              doctorAppointments={getFilteredAppointments(doctor.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicSchedule; 