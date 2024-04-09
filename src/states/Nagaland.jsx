import React from "react";
import image1 from "../assets/DzukouValley.jpg";
import image2 from "../assets/Kohima.jpg";
import image3 from "../assets/HornbillFestival.jpg";

const Nagaland = () => {
  const places = [
    {
      name: "Dzukou Valley",
      image: image1,
      description: "Valley of flowers and natural beauty",
      speciality:
        "Dzukou Valley, located on the border of Nagaland and Manipur, is known for its stunning landscapes, seasonal flowers, and trekking opportunities. It is often referred to as the Valley of Flowers of the Northeast.",
    },
    {
      name: "Kohima",
      image: image2,
      description: "Capital city of Nagaland",
      speciality:
        "Kohima is the capital city of Nagaland and is known for its scenic beauty, rich history, and vibrant culture. It is home to the famous World War II cemetery and offers panoramic views of the surrounding hills.",
    },
    {
      name: "Hornbill Festival",
      image: image3,
      description: "Annual cultural festival of Nagaland",
      speciality:
        "The Hornbill Festival is an annual cultural festival celebrated in Nagaland, showcasing the vibrant culture and traditions of the Naga tribes. It features traditional music and dance performances, indigenous games, and local cuisine.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Nagaland!
      </h1>
      <p className="text-lg mb-6 text-center">
        Nagaland, known as the "Land of Festivals", is famous for its rich
        cultural heritage, breathtaking landscapes, and vibrant tribal
        festivals.
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

export default Nagaland;
