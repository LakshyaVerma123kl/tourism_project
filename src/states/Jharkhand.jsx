import React from "react";
import image1 from "../assets/Betla.jpeg";
import image2 from "../assets/Ranchi.jpg";
import image3 from "../assets/Jagannath.jpg";

const Jharkhand = () => {
  const handleClick = () => {
    alert("You clicked on View Details!");
  };
  const places = [
    {
      name: "Betla National Park",
      image: image1,
      description: "Tiger reserve and wildlife sanctuary",
      speciality:
        "Betla National Park, located in the Chota Nagpur Plateau, is one of the oldest national parks in India. It is home to a variety of wildlife species, including tigers, elephants, and deer.",
    },
    {
      name: "Ranchi Lake",
      image: image2,
      description: "Scenic artificial lake in Ranchi",
      speciality:
        "Ranchi Lake, also known as Bada Talab, is an artificial lake located in the heart of Ranchi city. It offers boating facilities and is a popular recreational spot for locals and tourists alike.",
    },
    {
      name: "Jagannath Temple, Ranchi",
      image: image3,
      description: "Replica of the Jagannath Temple in Puri",
      speciality:
        "Jagannath Temple in Ranchi is a replica of the famous Jagannath Temple in Puri, Odisha. It is dedicated to Lord Jagannath and is one of the prominent religious sites in Jharkhand.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Jharkhand!
      </h1>
      <p className="text-lg mb-6 text-center">
        Jharkhand, known for its rich mineral resources and diverse tribal
        culture, offers a unique blend of nature, history, and tradition.
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

export default Jharkhand;
