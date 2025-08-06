import { MapPin } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-gradient-to-br from-teal-800 to-teal-600 text-white px-6  rounded-bl-[60px] rounded-tr-[70px]  mb-6 relative h-64 shadow-lg overflow-hidden">
      <div className="absolute top-4 left-8 flex items-center">
        <img
          src={logo}
          alt="Kaushalya_Clinic_Logo"
          className="w-12 h-12 rounded-full border-2 border-yellow-400"
        />
      </div>

      <div className="flex flex-col justify-center h-full mt-3">
        <h1 className="text-3xl text-gray-100 font-bold">Kaushalya Clinic</h1>
        <p className="text-lg font-extrabold mt-1 text-green-800">
          Committed to your lifelong health!
        </p>
        <div className="flex items-center gap-1 text-sm mt-2 text-gray-100">
          <a href="https://www.google.co.in/maps/place/Andar+Bazar+,+Gaura+More+,+Siwan/@26.1027058,84.2892555,17z/data=!3m1!4b1!4m6!3m5!1s0x3992f7e9f622862b:0x97f3ba9215b82623!8m2!3d26.102701!4d84.2918358!16s%2Fg%2F11l6f7rh5y?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
           target="_blank" rel="noopener noreferrer"
          >
            <MapPin className="w-6 h-6" />
            <span>Aandar Bazar,Siwan,Bihar</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
