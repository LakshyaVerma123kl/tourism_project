import React from "react";
import image1 from "../assets/Dzukou.jpeg";
import image2 from "../assets/Aizawl.jpeg";
import image3 from "../assets/MurlenNationalPark.jpg";

const Mizoram = () => {
  const places = [
    {
      name: "Dzukou Valley",
      image: image1,
      description: "Valley of flowers and natural beauty",
      speciality:
        "Dzukou Valley, located on the border of Nagaland and Manipur, is known for its stunning landscapes, seasonal flowers, and trekking opportunities. It is often referred to as the Valley of Flowers of the Northeast.",
    },
    {
      name: "Aizawl",
      image: image2,
      description: "Capital city of Mizoram",
      speciality:
        "Aizawl is the capital city of Mizoram and is known for its scenic beauty, vibrant culture, and bustling markets. It offers visitors a glimpse into the rich heritage and traditions of the Mizo people.",
    },
    {
      name: "Murlen National Park",
      image: image3,
      description: "Biodiversity hotspot in Mizoram",
      speciality:
        "Murlen National Park, located in the Champhai district, is a biodiversity hotspot known for its rich flora and fauna. It is home to several endangered species and offers opportunities for wildlife viewing and trekking.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Mizoram!
      </h1>
      <p className="text-lg mb-6 text-center">
        Mizoram, known as the "Land of the Highlanders", is famous for its
        scenic beauty, rich cultural heritage, and warm hospitality.
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

export default Mizoram;
