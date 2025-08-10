import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-6 text-teal-700">Book Your Appointment</h2>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <Calendar
          onChange={setDate}
          value={date}
          className="rounded-md"
        />

        <p className="mt-4 text-center text-gray-700 font-medium">
          Selected Date: <span className="text-blue-600">{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
};

export default AppointmentCalendar;
