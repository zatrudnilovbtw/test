import React from 'react';
import ClinicSchedule from './components/ClinicSchedule';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-600">Медицинский центр</h1>
        </div>
      </header>

      <main className="flex-grow">
        <ClinicSchedule />
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Медицинский центр</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
