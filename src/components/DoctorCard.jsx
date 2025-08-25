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
import { motion } from "framer-motion";
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
    <motion.div
      className="bg-pink-100 px-6 shadow-lg rounded-2xl transition-all duration-300 w-full max-w-5xl mx-auto border border-gray-100 p-3"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
    >
      <MovingText />

      {/* Parent Flex Row */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side – Doctor Info */}
        <motion.div
          className="flex-1"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 pb-5">
            {/* Image */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="p-[3px] rounded-full bg-gradient-to-tr from-[#facc15] to-[#22d3ee]">
                <img
                  src={image}
                  alt={name}
                  className="w-28 h-28 md:w-24 md:h-24 object-cover rounded-full border-2 border-white shadow-md"
                />
              </div>
            </motion.div>

            {/* Name + Specialty */}
            <div className="flex-1 text-center md:text-left">
              <motion.h3
                className="text-2xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <User className="w-5 h-5 text-blue-600  " /> {name}
              </motion.h3>
              <motion.p
                className="text-lg text-gray-600 flex items-center justify-center md:justify-start gap-1 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Stethoscope className="w-4 h-4 text-teal-500" /> {specialty}
              </motion.p>

              {/* Rating */}
              <motion.div
                className="flex items-center justify-center md:justify-start gap-1 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
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
              </motion.div>
            </div>
          </div>

          {/* Gradient line separator */}
          <motion.div
            className="w-full h-[2px] bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          ></motion.div>

          {/* Info Section */}
          <motion.div
            className="mt-5 space-y-3 text-gray-700"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.p
              className="flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
            >
              <GraduationCap className="w-5 h-5 text-green-600" />
              <span className="font-medium hover-underline">{qualification}</span>
            </motion.p>

            <motion.p
              className="flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
            >
              <Briefcase className="w-5 h-5 text-indigo-500" />
              <span className="hover-underline">{experience} Experience</span>
            </motion.p>

            {languages && languages.length > 0 && (
              <motion.div
                className="flex items-center gap-2 flex-wrap"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
              >
                <Languages className="w-5 h-5 text-purple-600" />
                {languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded-full hover-underline"
                  >
                    {lang}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.p
              className="flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
            >
              <CalendarDays className="w-5 h-5 text-yellow-600" />
              <span className="hover-underline">{availability}</span>
            </motion.p>
            {time && day && (
              <motion.p
                className="flex items-center gap-2"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
              >
                <Clock className="w-5 h-5 text-pink-600" />
                <span className="hover-underline">
                  {day}, {time}
                </span>
              </motion.p>
            )}

            <motion.p
              className="flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
            >
              <MapPin className="w-5 h-5 text-red-500" />
              <span className="hover-underline">{location}</span>
            </motion.p>

            <motion.p
              className="flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
            >
              <Mail className="w-5 h-5 text-pink-500" />
              <span className="hover-underline">{contact}</span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right Side – Quote */}
        <motion.div
          className="flex-1 flex justify-center h-fit div-quote"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <DoctorQuote
            className="quote"
            text="The best way to find yourself is to lose yourself in the service of others."
            author={name}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
