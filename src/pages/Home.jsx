import React from "react";
import Header from "../components/Header";
import DoctorCard from "../components/DoctorCard";
import Services from "../components/Services";
import AppointmentCalendar from "../components/AppointmentCalendar";
import DoctorMessage from "../components/DoctorMessage";
import SliderPage from "./SliderPage";
import MovingText from "../components/MovingText";
import { AnimatePresence , motion} from "framer-motion";

const Home = () => {
  return (
    <div className=" bg-white ">
        <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          
        </motion.div>
      </AnimatePresence>
      {/* Header */}
      <Header />
      {/* Doctor Section */}
      <section className="  py-10 flex flex-col md:flex-row justify-center items-stretch gap-6   ">
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
      </section>

      {/* Intro Section */}
      <section className="text-center   pt-4 ">
        <h2 className="text-2xl  md:text-3xl font-bold text-gray-800 leading-snug">
          Your Health Matters
        </h2>

        <p className="mt-2 mb-2 px-2 text-xl text-teal-800 font-medium">
          Book a consultation with our experienced doctor and take the first
          step toward better health.
        </p>
        <SliderPage />
      </section>

      {/* Services Section */}
      <section className="py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-6">
          Comprehensive care for you and your family
        </p>
        <Services />
      </section>
      {/* doctor message */}
      <section className=" shadow-lg border-t-5  border-t-teal-600 p-5">
        <DoctorMessage
          name="Dr. Umesh Kumar Sharma"
          qualification="MBBS(MD)"
        />
      </section>
      <AppointmentCalendar />
    </div>
  );
};

export default Home;
