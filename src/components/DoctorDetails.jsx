import React from "react";
import {
  Mail,
  MapPin,
  CalendarDays,
  GraduationCap,
  Languages,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const DoctorDetails = () => {
  const doctor = {
    name: "Dr. Umesh Kumar Sharma",
    specialization: "General Physician",
    experience: "15+ years",
    education: "MBBS, MD (Gen)",
    languages: ["English", "Hindi", "French"],
    availability: "Mon - Fri, 10:00 AM to 5:00 PM",
    location: "Aandar Bazar, Siwan",
    contact: "dr.umesh@example.com",
    image: "/doctor.jpg",
  };

  return (
    <div className="flex justify-center py-10 px-4 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl w-full grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="rounded-full w-36 h-36 object-cover border-4 border-teal-400 shadow-md"
          />
          <button className="mt-2 px-4 py-2 bg-teal-600 text-white text-sm rounded-full hover:bg-teal-700 transition font-medium cursor-pointer">
            <Link to="/book-now" >Book Appointment</Link>
          </button>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <User className="w-6 h-6 text-blue-600" /> {doctor.name}
          </h2>
          <p className="text-gray-700">
            <strong>Specialization:</strong> {doctor.specialization}
          </p>

          <div className="flex items-center gap-2 text-gray-600">
            <GraduationCap className="w-5 h-5 text-green-600" />
            <span>{doctor.education}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <CalendarDays className="w-5 h-5 text-indigo-600" />
            <span>
              <strong>Experience:</strong> {doctor.experience}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Languages className="w-5 h-5 text-purple-600" />
            <span className="flex gap-2 flex-wrap">
              {doctor.languages.map((lang, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                >
                  {lang}
                </span>
              ))}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <CalendarDays className="w-5 h-5 text-yellow-600" />
            <span>
              <strong>Availability:</strong> {doctor.availability}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 text-red-600" />
            <span>{doctor.location}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-5 h-5 text-pink-600" />
            <span>{doctor.contact}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
