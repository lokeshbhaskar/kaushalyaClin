import {
  Star,
  CalendarDays,
  Clock,
  Stethoscope,
  MapPin,
  Briefcase,
  Languages,
  GraduationCap,
  Mail,
  User,
} from "lucide-react";
import DoctorQuote from "./DoctorQuote";
import MovingText from "./MovingText";

const DoctorCard = ({
  name,
  specialty,
  rating,
  time,
  day,
  qualification,
  image,
  experience,
  languages,
  location,
  contact,
  availability,
}) => {
  return (
    <div className="bg-pink-100 p-6 shadow-lg rounded-2xl transition-all duration-300 w-full max-w-5xl mx-auto hover:shadow-xl hover:-translate-y-1 border border-gray-100">
      <MovingText />
      {/* Parent Flex Row */}
      <div className="flex flex-col lg:flex-row gap-8 ">
        {/* Left Side – Doctor Info */}
        <div className="flex-1">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 pb-5">
            {/* Image */}
            <div className="relative">
              <div className="p-[3px] rounded-full bg-gradient-to-tr from-[#facc15] to-[#22d3ee]">
                <img
                  src={image}
                  alt={name}
                  className="w-28 h-28 md:w-24 md:h-24 object-cover rounded-full border-2 border-white shadow-md"
                />
              </div>
            </div>

            {/* Name + Specialty */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-2">
                <User className="w-5 h-5 text-blue-600" /> {name}
              </h3>
              <p className="text-lg text-gray-600 flex items-center justify-center md:justify-start gap-1 mt-1">
                <Stethoscope className="w-4 h-4 text-teal-500" /> {specialty}
              </p>

              {/* Rating */}
              <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-1 text-sm text-gray-600">
                  ({rating.toFixed(2)})
                </span>
              </div>
            </div>
          </div>

          {/* Gradient line separator */}
          <div className="w-full h-[2px] bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>

          {/* Info Section */}
          <div className="mt-5 space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-green-600" />
              <span className="font-medium hover-underline">{qualification}</span>
            </p>

            <p className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-500" />
              <span className="hover-underline">{experience} Experience</span>
            </p>

            {languages && languages.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <Languages className="w-5 h-5 text-purple-600" />
                {languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded-full hover-underline"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            )}

            <p className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-yellow-600" />
              <span className="hover-underline">{availability}</span>
            </p>

            {time && day && (
              <p className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-pink-600" />
                <span className="hover-underline">
                  {day}, {time}
                </span>
              </p>
            )}

            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500" />
              <span className="hover-underline">{location}</span>
            </p>

            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-pink-500" />
              <span className="hover-underline">{contact}</span>
            </p>
          </div>
        </div>

        {/* Right Side – Quote */}
        <div className="flex-1 flex justify-center h-fit div-quote">
          <DoctorQuote
          className="quote"
            text="The best way to find yourself is to lose yourself in the service of others."
            author={name}
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
