import React from "react";
import image1 from "../assets/Tiru.jpg";
import image2 from "../assets/Char.jpeg";
import image3 from "../assets/bor.jpeg";

const AndhraPradesh = () => {
  const places = [
    {
      name: "Tirumala Temple",
      image: image1,
      description: "Hindu temple dedicated to Lord Venkateswara",
      speciality:
        "Tirumala Temple, also known as Sri Venkateswara Temple, is a renowned Hindu temple dedicated to Lord Venkateswara located in Tirumala, Andhra Pradesh. It is one of the richest temples in the world and attracts millions of pilgrims annually.",
    },
    {
      name: "Charminar",
      image: image2,
      description: "Iconic monument in Hyderabad",
      speciality:
        "Charminar is an iconic monument and mosque located in the heart of Hyderabad. It was built in 1591 by Sultan Muhammad Quli Qutb Shah to commemorate the end of a deadly plague.",
    },
    {
      name: "Borra Caves",
      image: image3,
      description: "Limestone caves in the Eastern Ghats",
      speciality:
        "Borra Caves are natural limestone caves located in the Ananthagiri Hills of the Eastern Ghats in Andhra Pradesh. They are known for their unique formations, including stalactites and stalagmites, and are a popular tourist attraction.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Andhra Pradesh!
      </h1>
      <p className="text-lg mb-6 text-center">
        Andhra Pradesh, known for its rich cultural heritage, vibrant cuisine,
        and diverse landscapes, offers a myriad of experiences for travelers.
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

export default AndhraPradesh;
