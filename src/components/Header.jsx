import { MapPin, Phone, HeartPulse, Clock } from "lucide-react";
import logo from "../assets/logo.png";
import MovingText from "./MovingText";

const Header = () => {
  return (
    <div className="relative  overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute left-0 right-0 bottom-0 z-0 overflow-hidden h-[80px]  ">
        <svg
          className="wave wave1"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#5B49B5"
            fillOpacity="1"
            d="M0,192L48,208C96,224,192,256,288,256C384,256,480,224,576,197.3C672,171,768,149,864,160C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128V320H0Z"
          ></path>
        </svg>
        <svg
          className="wave wave2"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#4A38A0"
            fillOpacity="0.85"
            d="M0,256L60,240C120,224,240,192,360,170.7C480,149,600,139,720,144C840,149,960,171,1080,176C1200,181,1320,171,1380,165.3L1440,160V320H0Z"
          ></path>
        </svg>
      </div>

      {/* Main Header Content */}
      <div className="bg-[#6F5CC4]/90 text-white px-6 py-6  shadow-xl relative">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          {/* Left - Logo + Clinic Info */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.jpg"
              alt="Kaushalya-Clinic-Logo"
              className="w-16 h-16 rounded-full border-2 border-yellow-400 shadow-md"
            />
            <div className="text-center space-y-2">
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-300 via-cyan-300 to-teal-200 bg-clip-text text-transparent drop-shadow-lg hover-underline">
                Kaushalya Clinic
              </h1>
              <p className="text-lg text-center text-gray-100 font-medium italic hover-underline">
                Committed to your lifelong health
              </p>
            </div>
          </div>

          {/* Center - Timings & Services */}
          <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg text-center hover-border">
            <p className="flex items-center justify-center gap-2 text-lg font-medium">
              <Clock className="w-5 h-5 text-yellow-300" />
              Mon–Sat:{" "}
              <span className="text-yellow-300 font-semibold">
                9:00 AM – 5:00 PM
              </span>
            </p>
            <p className="text-sm text-gray-200">
              🩺 Same-day appointments available
            </p>
          </div>
          {/* Right - Address & Contact */}
          <div className="text-center md:text-right space-y-1">
            <div className="flex md:justify-end justify-center items-center gap-2">
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
            <div className="flex md:justify-end justify-center items-center gap-2">
              <Phone className="w-5 h-5 text-yellow-300" />
              <a href="tel:+917367848333" className="hover:underline">
                +91 73678 48333
              </a>
            </div>
            <p className="flex md:justify-end justify-center items-center gap-2 text-sm text-gray-200">
              <HeartPulse className="w-5 h-5 text-pink-400" />
              Caring for Siwan families since{" "}
              <span className="text-yellow-300 font-semibold">2020</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
