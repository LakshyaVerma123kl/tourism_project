import React from "react";
import image1 from "../assets/MeenakshiTemple.jpg";
import image2 from "../assets/Mahabalipuram.jpg";
import image3 from "../assets/Ooty.jpg";

const TamilNadu = () => {
  const places = [
    {
      name: "Meenakshi Temple",
      image: image1,
      description: "Historic Hindu temple in Madurai",
      speciality:
        "Meenakshi Temple, located in Madurai, is a historic Hindu temple dedicated to Goddess Meenakshi and Lord Sundareswarar. It is known for its towering gopurams (gateway towers) adorned with thousands of colorful sculptures.",
    },
    {
      name: "Mahabalipuram",
      image: image2,
      description: "UNESCO World Heritage Site",
      speciality:
        "Mahabalipuram, also known as Mamallapuram, is a UNESCO World Heritage Site renowned for its ancient rock-cut temples and sculptures. It is a popular destination for history buffs and architecture enthusiasts.",
    },
    {
      name: "Ooty",
      image: image3,
      description: "Hill station in the Nilgiri Hills",
      speciality:
        "Ooty, short for Ootacamund and officially known as Udagamandalam, is a picturesque hill station nestled in the Nilgiri Hills. It is known for its scenic beauty, tea plantations, and pleasant climate.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Tamil Nadu!
      </h1>
      <p className="text-lg mb-6 text-center">
        Tamil Nadu, known as the "Land of Temples", is renowned for its rich
        cultural heritage, ancient temples, and beautiful hill stations.
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

export default TamilNadu;
