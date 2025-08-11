import { MapPin } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-gradient-to-br from-teal-800 to-teal-600 text-white px-6  rounded-bl-[60px] rounded-tr-[70px]  mb-6 relative h-68 shadow-lg overflow-hidden">
      <div className="absolute top-4 left-8 flex items-center">
        <img
          src={logo}
          alt="Kaushalya_Clinic_Logo"
          className="w-12 h-12 rounded-full border-2 border-yellow-400"
        />
      </div>
      <div className="flex flex-col justify-center h-full mt-3 gap-2">
        <h1 className="text-4xl text-gray-100 font-bold">Kaushalya Clinic</h1>
        <p className="text-lg font-extrabold mt-1 text-gray-300">
          Committed to your lifelong health!
        </p>
        <div className="flex items-center gap-1 text-sm mt-2 text-gray-100">
          <a href="https://maps.app.goo.gl/ZhLVQ6BGAvRWQPJM8"
           target="_blank" rel="noopener noreferrer"
          >
            <MapPin className="w-6 h-6" />
            <span className="text-md font-medium">Aandar Bazar,Siwan,Bihar</span>
          </a>
        </div>
          <p className="text-lg  font-medium">Phone: +91 73678 48333</p>
      </div>
    </div>
  );
};

export default Header;
