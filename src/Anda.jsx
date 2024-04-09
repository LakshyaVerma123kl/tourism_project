import React from "react";
import image1 from "./assets/Radhanagar.jpg";
import image2 from "./assets/Celluarjail.jpg";
import image3 from "./assets/Limestonecave.jpg";

const Anda = () => {
  const places = [
    {
      name: "Radhanagar Beach",
      image: image1,
      description: "Ranked as the #1 beach in Asia by Time Magazine in 2004",
      speciality:
        "Radhanagar Beach is a beautiful beach in Havelock Island, Andaman. It is famous for its crystal-clear turquoise waters and silky white sand as well as a breathtaking view.",
    },
    {
      name: "Cellular Jail",
      image: image2,
      description: "Symbol of India's struggle for independence",
      speciality:
        "Cellular Jail, also known as Kala Pani, is a colonial prison located in Port Blair, Andaman. It was used by the British to exile political prisoners.",
    },
    {
      name: "Limestone Caves",
      image: image3,
      description: "Accessed by a boat ride through mangrove forests",
      speciality:
        "Limestone Caves, located in Baratang Island, Andaman, are natural caves formed over centuries by the dissolution of limestone rocks. They are home to unique geological formations and stalactites.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Andaman!
      </h1>
      <p className="text-lg mb-6 text-center">
        Andaman and Nicobar Islands, located in the Bay of Bengal, are known for
        their breathtaking natural beauty and rich marine life.
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

export default Anda;
