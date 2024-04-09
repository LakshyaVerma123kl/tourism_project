import React from "react";
import image1 from "../assets/ElephantaCaves.jpg";
import image2 from "../assets/Mumbai.jpg";
import image3 from "../assets/AjantaCaves.jpg";

const Maharashtra = () => {
  const places = [
    {
      name: "Elephanta Caves",
      image: image1,
      description: "UNESCO World Heritage Site",
      speciality:
        "The Elephanta Caves are a UNESCO World Heritage Site located on Elephanta Island in Mumbai Harbour. They contain rock-cut cave temples dedicated to the Hindu god Shiva.",
    },
    {
      name: "Mumbai",
      image: image2,
      description: "Financial capital and cultural hub of India",
      speciality:
        "Mumbai, formerly known as Bombay, is the financial capital and largest city in India. It is known for its bustling streets, iconic landmarks, and vibrant nightlife.",
    },
    {
      name: "Ajanta Caves",
      image: image3,
      description: "Ancient Buddhist cave monuments",
      speciality:
        "The Ajanta Caves are ancient Buddhist cave monuments located in the Aurangabad district. They are renowned for their exquisite rock-cut architecture and stunning murals depicting Buddhist legends and teachings.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Maharashtra!
      </h1>
      <p className="text-lg mb-6 text-center">
        Maharashtra, known for its bustling cities, rich cultural heritage, and
        diverse landscapes, offers a myriad of experiences for travelers.
      </p>

      {/* Popular Places */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div key={index} className="relative cursor-pointer">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-64 object-cover rounded-lg mb-2 shadow-md"
            />
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-xl font-semibold mb-2">{place.name}</p>
              <p className="text-sm mb-4">{place.description}</p>
              <p className="text-xs text-gray-600 hover:text-teal-400 transition-colors duration-300">
                {place.speciality}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maharashtra;
