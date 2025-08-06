import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HerniaRepair = () => {
   const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">Hernia Repair</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">What is Hernia Repair?</h2>
        <p className="text-gray-700 leading-relaxed">
          Hernia repair is a surgical procedure to correct a hernia, a condition where an organ or tissue pushes through a weak spot in the surrounding muscle or tissue. It most commonly occurs in the abdomen, especially the groin area.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Types of Hernia Treated</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Inguinal Hernia</li>
          <li>Umbilical Hernia</li>
          <li>Hiatal Hernia</li>
          <li>Incisional Hernia</li>
          <li>Femoral Hernia</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Treatment Options</h2>
        <p className="text-gray-700 leading-relaxed">
          Depending on the type and severity of the hernia, treatment may include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Open Surgery:</strong> A traditional method with a larger incision.</li>
          <li><strong>Laparoscopic Surgery:</strong> Minimally invasive technique with small incisions and faster recovery.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Expert general surgeons</li>
          <li>State-of-the-art surgical facilities</li>
          <li>Post-operative care and support</li>
        </ul>
      </section>

      {/* Book a Consultation Section */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Book a Consultation</h2>
        <p className="text-gray-700 mb-6">Ready to take the first step toward hernia recovery? Schedule a consultation with our experts today.</p>
        <Link to="/consultation">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
           onClick={() => navigate('/service/book-now')}
          >
            Book Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default HerniaRepair;
