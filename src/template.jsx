import React from "react";
import { FaPlane, FaShip } from "react-icons/fa";
import image1 from "./assets/Radhanagar.jpg";
import image2 from "./assets/Celluarjail.jpg";
import image3 from "./assets/Limestonecave.jpg";

const Template = () => {
  const places = [
    {
      name: "Place 1",
      image: image1,
      description: "Description of Place 1",
      speciality: "Speciality of Place 1",
    },
    {
      name: "Place 2",
      image: image2,
      description: "Description of Place 2",
      speciality: "Speciality of Place 2",
    },
    {
      name: "Place 3",
      image: image3,
      description: "Description of Place 3",
      speciality: "Speciality of Place 3",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to State Name!
      </h1>
      <p className="text-lg mb-6 text-center">
        Description of the state or UT.
      </p>

      {/* Popular Places */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div key={index} className="relative">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-64 object-cover rounded-lg mb-2 shadow-md cursor-pointer transition-transform duration-300 transform hover:scale-105"
            />
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-xl font-semibold mb-2">{place.name}</p>
              <p className="text-sm mb-4">{place.description}</p>
              <p className="text-xs text-gray-600 hover:text-teal-400 transition-colors duration-300 cursor-pointer">
                {place.speciality}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template;
