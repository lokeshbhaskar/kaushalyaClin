import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { toast } from "react-toastify";

const AppointmentCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const sendToDoctor = () => {
    if (!name || !address) {
      alert("⚠️ Please fill in all details before booking.");
      return;
    }

    const appointmentData = {
      name,
      address,
      date,
    };

    fetch("https://kaushalyaclinic1.onrender.com/send-appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // alert("✅ ");
          toast.success("Appointment booked and doctor notified!")
          setName("");
          setAddress("");
          setDate(new Date());
        } else {
          alert("❌ Failed to book appointment.");
          console.error(data);
        }
      })
      .catch((err) => {
        alert("❌ Error sending appointment.");
        console.error(err);
      });
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-6 text-teal-700">Book Your Appointment</h2>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <label className="block mb-2 text-gray-700 font-medium">Patient Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="block mb-2 text-gray-700 font-medium">Address</label>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="block mb-2 text-gray-700 font-medium">Select Date</label>
        <Calendar onChange={setDate} value={date} className="rounded-md border border-gray-300" />

        <p className="mt-4 text-center text-gray-700 font-medium">
          Selected Date: <span className="text-blue-600">{date.toDateString()}</span>
        </p>

        <button
          onClick={sendToDoctor}
          className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentCalendar;
