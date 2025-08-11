import React from "react";
import Header from "../components/Header";
import DoctorCard from "../components/DoctorCard";
import Services from "../components/Services";
import AppointmentCalendar from "../components/AppointmentCalendar";
import DoctorMessage from "../components/DoctorMessage";

const Home = () => {
  return (
    <div className="pt-4 px-2">
      <Header name="user" />
      <div className="px-4 flex flex-col md:flex-row justify-center items-center ">
        {/* <h2 className="text-xl font-semibold my-4 px-2 text-center">
          Your Health Matters – <br /> Book a Consultation With Our Expert Doctor
        </h2> */}

        <DoctorCard
          name="Dr. Umesh Kumar Sharma"
          qualification="MBBS(MD)"
          specialty="General Physician"
          rating={4.62}
          time="10:00 AM - 6:00 PM"
          day="Monday-Friday"
          image="/doctor.jpg"
        />
        <DoctorMessage name="Dr. Umesh Kumar Sharma" qualification="MBBS(MD)" />
      </div>
      <h2 className="text-3xl font-semibold mt-8 px-2 text-center">
        Our Services
      </h2>
      <Services />
      <AppointmentCalendar />
    </div>
  );
};

export default Home;
