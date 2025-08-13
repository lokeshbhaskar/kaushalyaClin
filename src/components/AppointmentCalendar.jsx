import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { toast } from "react-toastify";

const AppointmentCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const sendToDoctor = () => {
    if (!name || !address) {
      toast.error("Please fill the all requirements")
      return;
    }
    setLoading(true);

    setTimeout(() => {
      const appointmentData = { name, address, date };
      fetch("https://kaushalyaclinic1.onrender.com/send-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success("Appointment booked and doctor notified!");
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
        })
        .finally(() => {
          setLoading(false);
        });
    }, 3000);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-6 text-teal-700">
        Book Your Appointment
      </h2>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <label className="block mb-2 text-gray-700 font-medium">
          Patient Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <label className="block mb-2 text-gray-700 font-medium">Address</label>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          disabled={loading}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="block mb-2 text-gray-700 font-medium">
          Select Date
        </label>
        <Calendar
          onChange={setDate}
          value={date}
          className="rounded-md border border-gray-300"
        />

        <p className="mt-4 text-center text-gray-700 font-medium">
          Selected Date:{" "}
          <span className="text-blue-600">{date.toDateString()}</span>
        </p>

        {/* loader */}
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm z-50">
            <p className="text-green-800 text-2xl font-bold animate-pulse text-center">
              ⏳ Hold on, we are processing your appointment...
            </p>
          </div>
        )}

        <button
          onClick={sendToDoctor}
          disabled={loading}
          className={`mt-6 w-full text-white py-2 px-4 rounded transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-teal-600 hover:bg-teal-700"
          }`}
        >
          {loading ? "Processing..." : "Book Appointment"}
        </button>
      </div>
    </div>
  );
};

export default AppointmentCalendar;
