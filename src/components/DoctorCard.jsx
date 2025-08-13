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
  User
} from "lucide-react";

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
  availability
}) => {
  return (
    <div className="bg-pink-100 p-6 shadow-md rounded-2xl transition-all duration-300 w-full max-w-lg mx-auto flex flex-col md:flex-row items-center gap-5 border border-gray-100 hover:shadow-xl hover:scale-[1.02] border-l-2 border-l-teal-400 border-r-2 border-r-teal-400 ">
      
      {/* Doctor Image */}
      <div className="relative flex-shrink-0 flex flex-col items-center">
        <div className="p-[3px] rounded-full bg-gradient-to-tr from-teal-400 to-teal-600">
          <img
            src={image}
            alt={name}
            className="w-28 h-28 md:w-24 md:h-24 object-cover rounded-full border-2 border-white"
          />
        </div>
      </div>

      {/* Doctor Info */}
      <div className="flex-1 min-w-0 space-y-2">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <User className="w-5 h-5 text-blue-600" /> {name}
        </h3>
        <p className="text-lg text-gray-600 flex items-center gap-1">
          <Stethoscope className="w-4 h-4 text-teal-500" /> {specialty}
        </p>
        <p className="text-lg text-gray-600 flex items-center gap-1">
          <GraduationCap className="w-4 h-4 text-green-600" /> {qualification}
        </p>

        {/* Experience */}
        <p className="text-lg text-gray-600 flex items-center gap-1">
          <Briefcase className="w-4 h-4 text-indigo-500" /> {experience} Experience
        </p>

        {/* Languages */}
        {languages && languages.length > 0 && (
          <div className="flex items-center gap-1 flex-wrap">
            <Languages className="w-4 h-4 text-purple-600" />
            {languages.map((lang, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {lang}
              </span>
            ))}
          </div>
        )}

        {/* Availability */}
        <p className="text-lg text-gray-600 flex items-center gap-1">
          <CalendarDays className="w-4 h-4 text-yellow-600" /> {availability}
        </p>

        {/* Location */}
        <p className="text-lg text-gray-600 flex items-center gap-1">
          <MapPin className="w-4 h-4 text-red-500" /> {location}
        </p>

        {/* Contact */}
        <p className="text-lg text-gray-600 flex items-center gap-1">
          <Mail className="w-4 h-4 text-pink-500" /> {contact}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
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
          <span className="ml-1 text-gray-600 text-lg">
            ({rating.toFixed(2)})
          </span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
