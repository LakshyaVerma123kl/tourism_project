import React from "react";
import image1 from "../assets/Hawa.jpeg";
import image2 from "../assets/Amber.jpeg";
import image3 from "../assets/Jaisalmer.jpeg";

const Rajasthan = () => {
  const handleClick = () => {
    alert("You clicked on View Details!");
  };
  const places = [
    {
      name: "Hawa Mahal",
      image: image1,
      description: "Iconic palace in Jaipur",
      speciality:
        "Hawa Mahal, also known as the Palace of Winds, is an iconic palace in Jaipur known for its unique honeycomb-like structure with numerous windows and balconies.",
    },
    {
      name: "Amber Fort",
      image: image2,
      description: "Historic fort in Jaipur",
      speciality:
        "Amber Fort, located in Amer, near Jaipur, is a historic fort known for its magnificent architecture, grandeur, and intricate marble and sandstone carvings.",
    },
    {
      name: "Jaisalmer",
      image: image3,
      description: "Golden city in the Thar Desert",
      speciality:
        "Jaisalmer, known as the Golden City, is located in the heart of the Thar Desert. It is famous for its golden sandstone architecture, magnificent forts, and vibrant culture.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Rajasthan!
      </h1>
      <p className="text-lg mb-6 text-center">
        Rajasthan, often referred to as the "Land of Kings", is renowned for its
        majestic forts, palaces, desert landscapes, and vibrant culture.
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

export default Rajasthan;
