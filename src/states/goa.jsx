import React from "react";
import image1 from "../assets/Basilica.jpeg";
import image2 from "../assets/Calangute.jpg";
import image3 from "../assets/Dudhsagar.jpg";

const Goa = () => {
  const places = [
    {
      name: "Basilica of Bom Jesus",
      image: image1,
      description: "A UNESCO World Heritage Site",
      speciality:
        "The Basilica of Bom Jesus is a famous church located in Old Goa. It holds the mortal remains of St. Francis Xavier, a prominent Jesuit missionary.",
    },
    {
      name: "Calangute Beach",
      image: image2,
      description: "The largest beach in North Goa",
      speciality:
        "Calangute Beach is known for its golden sand, water sports activities, and vibrant nightlife. It is a popular tourist destination in Goa.",
    },
    {
      name: "Dudhsagar Falls",
      image: image3,
      description: "One of the tallest waterfalls in India",
      speciality:
        "Dudhsagar Falls, located on the Mandovi River, is one of the tallest waterfalls in India. It is surrounded by lush greenery and offers a breathtaking sight, especially during the monsoon season.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Goa!</h1>
      <p className="text-lg mb-6 text-center">
        Goa, known for its beautiful beaches, vibrant culture, and
        Portuguese-influenced architecture, is a popular tourist destination in
        India.
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

export default Goa;
