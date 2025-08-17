import React from "react";

function DoctorMessage(props) {
  return (
    <div className="w-full my-5 p-5 bg-pink-100  rounded-3xl font-sans shadow-md">
      <h2 className="text-green-700 text-3xl text-center font-bold mb-2">
        👨‍⚕️ Message from Your Doctor
      </h2>
      <p className="text-base mb-4">
        Dear Friends,  
        I care deeply about your well-being, so I want to share some simple tips
        that can help you stay healthy and live a longer, happier life.
      </p>
      <h3 className="mt-4 font-semibold text-lg">A Healthy Life, A Happy Tomorrow</h3>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>
          <strong>Proper Diet:</strong> Include fresh fruits, green vegetables,
          pulses, and grains in your diet. Avoid junk food and excessively sweet
          or fried foods.
        </li>
        <li>
          <strong>Regular Exercise:</strong> Walk for at least 30 minutes daily,
          do yoga, or engage in any physical activity you enjoy.
        </li>
        <li>
          <strong>Adequate Sleep:</strong> Get 7–8 hours of deep sleep every day
          so your body and mind can fully refresh.
        </li>
        <li>
          <strong>Mindful Hygiene:</strong> Keep yourself and your surroundings
          clean. Regularly washing your hands helps prevent many illnesses.
        </li>
        <li>
          <strong>Avoid Stress:</strong> Meditate, listen to music, or spend
          time with your friends and family.
        </li>
      </ul>
      <p className="mt-4">
        Remember, these small steps will help you live a long and healthy life.
      </p>
      <p className="font-bold mt-3 text-end">
        Wishing you good health,  
        <br /> {props.name} <span className="font-medium">-{props.qualification}</span>
      </p>
    </div>
  );
}

export default DoctorMessage;
