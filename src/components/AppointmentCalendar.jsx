import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const sendToDoctor = () => {
    if (!name || !address) {
      alert("⚠️ Please fill in all details before booking.");
      return;
    }
    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const message = `
📅 *New Appointment Booked!*
👤 Name: ${name}
🏠 Address: ${address}
📆 Date: ${date.toDateString()}
🕒 Time: 10:00 AM
    `;

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown", // makes message bold/italic
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Message sent", data);
        alert("✅ Appointment booked and doctor notified!");
        setName("");
        setAddress("");
      })
      .catch((err) => {
        console.error("Error sending message", err);
        alert("❌ Failed to send message.");
      });
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
