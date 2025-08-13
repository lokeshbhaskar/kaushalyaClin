import React from "react";
import Header from "../components/Header";
import DoctorCard from "../components/DoctorCard";
import Services from "../components/Services";
import AppointmentCalendar from "../components/AppointmentCalendar";
import DoctorMessage from "../components/DoctorMessage";
import SliderPage from "./SliderPage";

const Home = () => {
  return (
    <div className="   bg-gray-300">
      {/* Header */}
      <Header />
      {/* Intro Section */}
      <section className="text-center  rounded-xl bg-pink-200 border-t-8 border-t-teal-600 pt-4 ">
        <h2 className="text-2xl  md:text-3xl font-bold text-gray-800 leading-snug">
          Your Health Matters
        </h2>
        <p className="mt-2 px-2 text-lg text-teal-800">
          Book a consultation with our experienced doctor and take the first
          step toward better health.
        </p>
        <SliderPage />
      </section>
      {/* Doctor Section */}
      <section className="bg-pink-100  py-10 flex flex-col md:flex-row justify-center items-stretch gap-6 rounded-xl shadow-lg border-t-8  border-t-teal-600 ">
        <DoctorCard
          name="Dr. Umesh Kumar Sharma"
          specialty="General Physician"
          rating={4.8}
          qualification="MBBS, MD (Gen)"
          image="/doctor.jpg"
          experience="15+ Years"
          languages={["English", "Hindi", "French"]}
          location="Aandar Bazar, Siwan"
          contact="dr.sharmaumesh@gmail.com"
          availability="Mon - Fri, 9:00 AM to 5:00 PM"
        />
        <DoctorMessage
          name="Dr. Umesh Kumar Sharma"
          qualification="MBBS (MD)"
        />
      </section>
      {/* Services Section */}
      <section className="py-10 bg-pink-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-6">
          Comprehensive care for you and your family
        </p>
        <Services />
      </section>
      <AppointmentCalendar />
    </div>
  );
};

export default Home;
