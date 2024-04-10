import React from "react";
import image1 from "../assets/Gurudon.jpeg";
import image2 from "../assets/Nathula.jpeg";
import image3 from "../assets/Rumtek.jpeg";

const Sikkim = () => {
  const handleClick = () => {
    alert("You clicked on View Details!");
  };
  const places = [
    {
      name: "Gurudongmar Lake",
      image: image1,
      description: "Sacred lake near the Indo-China border",
      speciality:
        "Gurudongmar Lake is one of the highest lakes in the world, located near the Indo-China border in North Sikkim. It is considered sacred by both Buddhists and Sikhs.",
    },
    {
      name: "Nathu La Pass",
      image: image2,
      description: "Mountain pass on the Indo-China border",
      speciality:
        "Nathu La Pass is a mountain pass in the Himalayas that connects Sikkim with Tibet Autonomous Region of China. It is a strategic route and offers stunning views of the surrounding mountains.",
    },
    {
      name: "Rumtek Monastery",
      image: image3,
      description: "Buddhist monastery near Gangtok",
      speciality:
        "Rumtek Monastery is a prominent Buddhist monastery located near Gangtok, the capital of Sikkim. It is known for its beautiful architecture, intricate murals, and religious significance.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Sikkim!
      </h1>
      <p className="text-lg mb-6 text-center">
        Sikkim, nestled in the Himalayas, is known for its pristine landscapes,
        Buddhist monasteries, and adventurous trekking routes.
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

export default Sikkim;
