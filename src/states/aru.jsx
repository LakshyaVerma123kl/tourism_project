import React from "react";
import image1 from "../assets/TawangMonastery.jpg";
import image2 from "../assets/ZiroValley.jpg";
import image3 from "../assets/SelaPass.jpg";

const ArunachalPradesh = () => {
  const places = [
    {
      name: "Tawang Monastery",
      image: image1,
      description: "Largest monastery in India",
      speciality:
        "Tawang Monastery, also known as Galden Namgey Lhatse, is a Buddhist monastery in Tawang, Arunachal Pradesh. It is one of the largest monasteries in India and is an important pilgrimage site for Buddhists.",
    },
    {
      name: "Ziro Valley",
      image: image2,
      description: "UNESCO World Heritage Site",
      speciality:
        "Ziro Valley, located in Lower Subansiri district, is famous for its picturesque landscapes, rice fields, and unique Apatani tribal culture. It was designated as a UNESCO World Heritage Site in 2012.",
    },
    {
      name: "Sela Pass",
      image: image3,
      description: "High-altitude mountain pass",
      speciality:
        "Sela Pass is a high-altitude mountain pass located in the Tawang district of Arunachal Pradesh. It offers breathtaking views of snow-capped peaks, lakes, and scenic landscapes. The pass is often covered in snow, making it a popular tourist destination during winters.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Arunachal Pradesh!
      </h1>
      <p className="text-lg mb-6 text-center">
        Arunachal Pradesh, located in the northeastern part of India, is known
        for its rich cultural heritage and stunning natural landscapes.
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

export default ArunachalPradesh;
