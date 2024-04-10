import React from "react";
import image1 from "../assets/Mahal.jpeg";
import image2 from "../assets/Varanasi.jpeg";
import image3 from "../assets/AgraFort.jpg";

const UttarPradesh = () => {
  const places = [
    {
      name: "Taj Mahal",
      image: image1,
      description: "Iconic white marble mausoleum in Agra",
      speciality:
        "The Taj Mahal is an iconic white marble mausoleum located in Agra. It was built by the Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal and is considered one of the Seven Wonders of the World.",
    },
    {
      name: "Varanasi",
      image: image2,
      description: "Ancient city on the banks of the Ganges",
      speciality:
        "Varanasi, also known as Kashi or Benares, is one of the oldest continuously inhabited cities in the world. It is considered one of the holiest cities in Hinduism and is known for its ghats, temples, and spiritual significance.",
    },
    {
      name: "Agra Fort",
      image: image3,
      description: "Historic fort in Agra",
      speciality:
        "Agra Fort is a historic fort located in Agra, near the Taj Mahal. It served as the main residence of the emperors of the Mughal Dynasty until 1638 and is a UNESCO World Heritage Site.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Uttar Pradesh!
      </h1>
      <p className="text-lg mb-6 text-center">
        Uttar Pradesh, the most populous state in India, is known for its rich
        cultural heritage, ancient monuments, and spiritual significance.
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

export default UttarPradesh;
