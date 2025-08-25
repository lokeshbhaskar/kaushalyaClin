import { MapPin, Phone, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Main Header Content */}
      <div className="bg-blue-900 text-white px-6 py-6 shadow-xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
          {/* Left Section - Logo + Clinic Info */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Logo with Gradient Border */}
            <motion.div
              className="p-[3px] rounded-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808] shadow-md inline-block"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src="/logo.jpg"
                alt="Kaushalya-Clinic-Logo"
                className="w-16 h-16 rounded-full bg-white"
              />
            </motion.div>
            {/* Clinic Name + Tagline */}
            <div className="space-y-2">
              <motion.h1
                className="text-3xl md:text-4xl font-extrabold tracking-wide md:tracking-widest bg-gradient-to-r from-yellow-300 via-cyan-300 to-teal-200 bg-clip-text text-transparent drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Kaushalya Clinic
              </motion.h1>
              <motion.p
                className="text-md text-gray-100 font-medium italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Committed to your lifelong health
              </motion.p>
            </div>
          </motion.div>

          {/* Right Section - 24x7 Logo + Contact Info */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-end gap-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* 24x7 Service Logo */}
            <motion.img
              src="/247service.png"
              alt="24x7 Service"
              className="w-28 h-28 md:w-32 md:h-32"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            {/* Contact Details */}
            <motion.div
              className="space-y-2 text-center md:text-right"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center justify-center md:justify-end gap-2">
                <MapPin className="w-5 h-5 text-yellow-300" />
                <a
                  href="https://maps.app.goo.gl/ZhLVQ6BGAvRWQPJM8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Aandar Bazar, Siwan, Bihar
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="w-5 h-5 text-yellow-300" />
                <a href="tel:+917367848333" className="hover:underline">
                  +91 73678 48333
                </a>
              </div>

              <p className="flex items-center justify-center md:justify-end gap-2 text-sm text-gray-200">
                <HeartPulse className="w-5 h-5 text-pink-400 animate-pulse" />
                Caring for Siwan families since{" "}
                <span className="text-yellow-300 font-semibold">2020</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
