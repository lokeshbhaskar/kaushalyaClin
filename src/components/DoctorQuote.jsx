import { Quote } from "lucide-react";

const DoctorQuote = ({ text, author }) => {
  return (
    <div className="relative mt-8 max-w-xl mx-auto p-6 rounded-2xl shadow-3xl bg-white/80 backdrop-blur-md border border-teal-100 hover:shadow-xl transition-all duration-300 ">
     
      {/* Quote Text */}
      <p className="text-xl font-medium italic text-gray-700 leading-relaxed relative z-10">
        "{text}"
      </p>

      {/* Gradient line separator */}
      <div className="w-full h-[2px] bg-gradient-to-r from-teal-400 to-blue-500 mt-4 rounded-full"></div>

      {/* Author */}
      <p className="text-right mt-3 font-semibold text-teal-600">
        – {author}
      </p>
    </div>
  );
};

export default DoctorQuote;
