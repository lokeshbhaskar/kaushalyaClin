import React from "react";
import { useNavigate } from "react-router-dom";

const GallbladderSurgery = () => {
   const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">Gallbladder Surgery</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">What is Gallbladder Surgery?</h2>
        <p className="text-gray-700 leading-relaxed">
          Gallbladder surgery, also known as cholecystectomy, is a surgical procedure to remove the gallbladder. It is commonly performed to treat gallstones and the complications they cause, such as inflammation, infection, or blockage.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">When is Gallbladder Surgery Needed?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Frequent or severe gallstone attacks</li>
          <li>Gallbladder inflammation (cholecystitis)</li>
          <li>Pancreatitis caused by gallstones</li>
          <li>Biliary dyskinesia or poor gallbladder function</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Types of Surgery</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Laparoscopic Cholecystectomy:</strong> A minimally invasive surgery using small incisions and a camera for guidance.</li>
          <li><strong>Open Cholecystectomy:</strong> A traditional approach with a larger incision, used in complicated cases.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Benefits of Gallbladder Surgery</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Relief from pain and digestive issues</li>
          <li>Prevention of future gallbladder attacks</li>
          <li>Improved quality of life</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Experienced general and laparoscopic surgeons</li>
          <li>Advanced surgical equipment and care</li>
          <li>Personalized post-operative support</li>
        </ul>
      </section>

      <div className="text-center">
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded shadow-md transition duration-300"
         onClick={() =>navigate('/service/book-now')}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default GallbladderSurgery;
