import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#f0f9ff] to-[#e0f2f1] z-50  ">
      <div className="flex  space-x-1 ">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-teal-500 rounded-2xl animate-pulse-ecg"
            style={{ animationDelay: `${i * 0.15}s` }}
          ></div>
        ))}
      </div>
      <p className="text-gray-700 text-xl font-medium mt-5">
        🩺Caring for you <br /> starts in just a moment…
      </p>
    </div>
  );
};

export default Loader;
