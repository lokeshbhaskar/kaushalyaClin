import React from "react";
import { useNavigate } from "react-router-dom";

const AppendixRemoval = () => {
   const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Appendix Removal (Appendectomy)
      </h1>

      {/* Overview */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📌 Overview</h2>
        <p>
          Appendix removal, also known as <strong>appendectomy</strong>, is a
          surgical procedure to remove the <strong>appendix</strong>, a small
          pouch attached to the large intestine. It is usually performed as an
          emergency surgery when a patient is diagnosed with{" "}
          <strong>appendicitis</strong> – an inflammation of the appendix.
        </p>
      </section>

      {/* Why It's Done */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧾 Why It's Done</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>To treat acute appendicitis</li>
          <li>To prevent rupture or abscess</li>
          <li>Sometimes performed if appendix is found inflamed during another abdominal surgery</li>
        </ul>
      </section>

      {/* Symptoms */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚠️ Symptoms of Appendicitis</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Sudden pain in the lower right abdomen</li>
          <li>Loss of appetite</li>
          <li>Nausea or vomiting</li>
          <li>Fever</li>
          <li>Abdominal swelling</li>
        </ul>
      </section>

      {/* Procedure */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔧 Procedure</h2>
        <p className="mb-2">There are two main types of appendectomy:</p>
        <ul className="list-decimal ml-6 space-y-1">
          <li>
            <strong>Laparoscopic Surgery</strong> (Minimally Invasive)
            <ul className="list-disc ml-6">
              <li>Small incisions</li>
              <li>Quicker recovery</li>
              <li>Less pain and scarring</li>
            </ul>
          </li>
          <li>
            <strong>Open Surgery</strong>
            <ul className="list-disc ml-6">
              <li>A single larger incision</li>
              <li>Used if the appendix has ruptured or there is widespread infection</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ Benefits</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Permanently treats appendicitis</li>
          <li>Prevents complications like rupture or peritonitis</li>
          <li>Fast recovery (especially with laparoscopic surgery)</li>
        </ul>
      </section>
      {/* Recovery */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🕒 Recovery</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Discharged within 24–48 hours</li>
          <li>Back to normal activities within 1–3 weeks</li>
          <li>Avoid heavy activity for a few weeks</li>
        </ul>
      </section>

      {/* Post-Surgery Tips */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Post-Surgery Tips</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Take medications as prescribed</li>
          <li>Keep incision area clean and dry</li>
          <li>Avoid lifting heavy objects</li>
          <li>Monitor for infection (fever, pus, redness)</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 p-6 rounded-lg shadow mt-8">
        <h2 className="text-xl font-semibold mb-2">👨‍⚕️ Consult Our Expert Surgeons</h2>
        <p className="mb-4">
          If you're experiencing symptoms or need more information about appendix removal, book a consultation with our experienced surgical team.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => navigate('/service/book-now')}
        >
          Book a Consultation
        </button>
      </section>
    </div>
  );
};

export default AppendixRemoval;
