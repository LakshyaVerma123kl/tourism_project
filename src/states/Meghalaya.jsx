import React from "react";
import image1 from "../assets/LivingRoot.jpg";
import image2 from "../assets/Cherrapunji.jpeg";
import image3 from "../assets/Mawlynnong.jpeg";

const Meghalaya = () => {
  const handleClick = () => {
    alert("You clicked on View Details!");
  };
  const places = [
    {
      name: "Living Root Bridges",
      image: image1,
      description: "Natural bridges made of intertwined roots",
      speciality:
        "Meghalaya is famous for its living root bridges, which are formed by training the roots of rubber trees over many years to create natural bridges over rivers and streams.",
    },
    {
      name: "Cherrapunji",
      image: image2,
      description: "One of the wettest places on Earth",
      speciality:
        "Cherrapunji, also known as Sohra, is famous for its high rainfall and stunning landscapes. It is home to beautiful waterfalls, lush greenery, and breathtaking viewpoints.",
    },
    {
      name: "Mawlynnong",
      image: image3,
      description: "Cleanest village in Asia",
      speciality:
        "Mawlynnong, located in the East Khasi Hills district, is renowned for being the cleanest village in Asia. It offers visitors a glimpse into the unique Khasi culture and pristine natural beauty.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Meghalaya!
      </h1>
      <p className="text-lg mb-6 text-center">
        Meghalaya, known as the "Abode of Clouds", is blessed with stunning
        landscapes, cascading waterfalls, and unique living root bridges.
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
              <p className="text-xs text-gray-600 hover:text-teal-400 transition-colors duration-300 mb-2">
                {place.speciality}
              </p>
              <button
                onClick={handleClick}
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meghalaya;
