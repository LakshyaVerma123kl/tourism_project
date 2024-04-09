import React from "react";
import image1 from "../assets/VictoriaMemorial.jpg";
import image2 from "../assets/Sunderbans.jpg";
import image3 from "../assets/Darjeeling.jpg";

const WestBengal = () => {
  const places = [
    {
      name: "Victoria Memorial",
      image: image1,
      description: "Iconic monument in Kolkata",
      speciality:
        "The Victoria Memorial is a large marble building in Kolkata, dedicated to Queen Victoria. It is now a museum and a popular tourist destination, known for its impressive architecture and lush gardens.",
    },
    {
      name: "Sunderbans",
      image: image2,
      description: "Mangrove forest and tiger reserve",
      speciality:
        "The Sunderbans is a vast mangrove forest in West Bengal, known for its rich biodiversity and as a habitat for the Bengal tiger. It is a UNESCO World Heritage Site and a popular destination for wildlife enthusiasts.",
    },
    {
      name: "Darjeeling",
      image: image3,
      description: "Hill station famous for tea plantations",
      speciality:
        "Darjeeling is a charming hill station in West Bengal, known for its tea plantations, stunning views of the Himalayas, and the Darjeeling Himalayan Railway, a UNESCO World Heritage Site.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to West Bengal!
      </h1>
      <p className="text-lg mb-6 text-center">
        West Bengal, known for its cultural heritage, diverse landscapes, and
        delicious cuisine, offers a rich tapestry of experiences for travelers.
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

export default WestBengal;
