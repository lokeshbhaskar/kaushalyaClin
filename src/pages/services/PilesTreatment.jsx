import React from "react";
import { useNavigate } from "react-router-dom";

const PilesTreatment = () => {
   const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">Piles Treatment</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">What is Piles?</h2>
        <p className="text-gray-700 leading-relaxed">
          Piles, also known as hemorrhoids, are swollen and inflamed veins in the rectum and anus that cause discomfort and bleeding. They can be internal (inside the rectum) or external (under the skin around the anus).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Symptoms of Piles</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Bleeding during bowel movements</li>
          <li>Itching or irritation in the anal region</li>
          <li>Pain or discomfort</li>
          <li>Swelling around the anus</li>
          <li>Presence of a painful lump near the anus</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Treatment Options</h2>
        <p className="text-gray-700 leading-relaxed">
          Treatment depends on the severity and type of piles. Options include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Lifestyle changes:</strong> High-fiber diet, increased water intake, and regular exercise</li>
          <li><strong>Medications:</strong> Creams, ointments, and pain relievers to manage symptoms</li>
          <li><strong>Minimally invasive procedures:</strong> Rubber band ligation, sclerotherapy, or infrared coagulation</li>
          <li><strong>Surgical removal:</strong> For severe or persistent cases (hemorrhoidectomy or stapled hemorrhoidopexy)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Experienced colorectal surgeons</li>
          <li>Advanced, minimally invasive treatments</li>
          <li>Personalized care and post-treatment support</li>
          <li>Comfortable and confidential consultations</li>
        </ul>
      </section>

      <div className="mt-8 text-center">
        <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
         onClick={() => navigate('/service/book-now')}
        >
          Book a Consultation
        </button>
      </div>
    </div>
  );
};

export default PilesTreatment;
