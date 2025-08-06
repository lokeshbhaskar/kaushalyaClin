import { Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
   const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center space-x-4 mb-6">
        <Stethoscope className="w-10 h-10 text-teal-600" />
        <h1 className="text-3xl font-bold text-gray-800">Doctor Consultation</h1>
      </div>

      <p className="text-gray-600 text-lg mb-6">
        Our general consultation service is the first step toward understanding your health.
        Whether you're experiencing discomfort, have a concern, or just want a regular check-up,
        our experienced doctors are here to guide and assist you.
      </p>

      <h2 className="text-2xl font-semibold text-teal-700 mb-4">What to Expect</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Detailed review of your medical history</li>
        <li>Physical examination and symptom evaluation</li>
        <li>Basic health screenings and recommendations</li>
        <li>Guidance on next steps like tests or specialist referrals</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-700 mt-8 mb-4">Why Choose Us?</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Experienced and compassionate general surgeons</li>
        <li>Modern diagnostic tools and equipment</li>
        <li>Personalized care tailored to your condition</li>
        <li>Seamless follow-up and patient support</li>
      </ul>

      <div className="mt-8 text-center">
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition"
         onClick={() =>navigate('/service/book-now')}
        >
          Book Your Consultation Now
        </button>
      </div>
    </div>
  );
};

export default Consultation;
