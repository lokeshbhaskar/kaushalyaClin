import React from "react";
import { Link, useNavigate } from "react-router-dom";

const WoundCare = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Wound Care Management
      </h1>

      {/* Overview */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📌 Overview</h2>
        <p>
          Wound care refers to the comprehensive treatment and monitoring of acute and chronic wounds. This specialized approach ensures proper healing, prevents infection, and improves overall recovery outcomes for patients with injuries, ulcers, or post-surgical wounds.
        </p>
      </section>

      {/* Why It's Done */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧾 Why It's Done</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>To promote faster and more effective wound healing</li>
          <li>To reduce the risk of infection and complications</li>
          <li>To manage chronic wounds such as diabetic ulcers or pressure sores</li>
          <li>To improve comfort and quality of life</li>
        </ul>
      </section>

      {/* Types of Wounds */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🩹 Types of Wounds Treated</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Diabetic foot ulcers</li>
          <li>Pressure ulcers (bedsores)</li>
          <li>Traumatic wounds and injuries</li>
          <li>Burns</li>
          <li>Surgical wounds and incisions</li>
        </ul>
      </section>

      {/* Treatment Options */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔧 Treatment Options</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Wound cleaning and debridement</strong> (removing dead/infected tissue)</li>
          <li><strong>Advanced dressings</strong> (moisture-retentive, antimicrobial, etc.)</li>
          <li><strong>Negative pressure wound therapy</strong></li>
          <li><strong>Antibiotic treatment</strong> for infected wounds</li>
          <li><strong>Monitoring for complications</strong> such as cellulitis or sepsis</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ Benefits</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Reduces healing time</li>
          <li>Prevents infections and complications</li>
          <li>Minimizes scarring</li>
          <li>Promotes better long-term outcomes</li>
        </ul>
      </section>

      {/* Aftercare Tips */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Aftercare Tips</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Keep the wound clean and dry</li>
          <li>Follow dressing change schedules</li>
          <li>Avoid pressure or friction on the wound</li>
          <li>Report signs of infection (redness, swelling, discharge)</li>
          <li>Maintain good nutrition and hydration for faster healing</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 p-6 rounded-lg shadow mt-8">
        <h2 className="text-xl font-semibold mb-2">👨‍⚕️ Consult Our Wound Care Experts</h2>
        <p className="mb-4">
          If you're dealing with a chronic wound or need expert care post-surgery, book a consultation with our experienced wound care specialists today.
        </p>
        <Link to="/book-consultation">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
           onClick={() =>navigate('/service/book-now')}
          >
            Book a Consultation
          </button>
        </Link>
      </section>
    </div>
  );
};

export default WoundCare;
