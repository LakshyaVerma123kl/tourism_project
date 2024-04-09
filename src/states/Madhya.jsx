import React from "react";
import image1 from "../assets/Khajuraho.jpg";
import image2 from "../assets/BandhavgarhNationalPark.jpg";
import image3 from "../assets/SanchiStupa.jpg";

const MadhyaPradesh = () => {
  const places = [
    {
      name: "Khajuraho Group of Monuments",
      image: image1,
      description: "UNESCO World Heritage Site",
      speciality:
        "The Khajuraho Group of Monuments is a UNESCO World Heritage Site known for its stunning temples adorned with intricate carvings depicting various aspects of life.",
    },
    {
      name: "Bandhavgarh National Park",
      image: image2,
      description: "Tiger reserve with high tiger density",
      speciality:
        "Bandhavgarh National Park is a renowned tiger reserve known for its high density of tigers. It offers excellent opportunities for wildlife safaris and tiger spotting.",
    },
    {
      name: "Sanchi Stupa",
      image: image3,
      description: "Buddhist monument dating back to the 3rd century BCE",
      speciality:
        "Sanchi Stupa is a Buddhist monument located in the town of Sanchi. It is one of the oldest stone structures in India and holds great significance for Buddhists worldwide.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Madhya Pradesh!
      </h1>
      <p className="text-lg mb-6 text-center">
        Madhya Pradesh, known as the "Heart of India", is blessed with rich
        biodiversity, historical landmarks, and cultural heritage.
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

export default MadhyaPradesh;
