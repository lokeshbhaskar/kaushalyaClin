import React, { useEffect, useState } from "react";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
];

const SliderPage = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px] p-2  relative overflow-hidden ">
      {/* Blurred background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(1px) brightness(50%)",
          transform: "scale(1)", 
        }}
      ></div>
      
      <div className="absolute inset-0 bg-teal-800/10"></div>

      {/* Main image */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <img
          src={images[index]}
          alt={`image_${index + 1}`}
          className={`max-h-[500px] object-contain rounded-lg transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{
            filter: "brightness(90%) contrast(110%) saturate(120%)",
          }}
        />
      </div>
    </div>
  );
};

export default SliderPage;
