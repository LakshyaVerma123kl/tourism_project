import React from "react";
import image1 from "../assets/Kaziranga.jpg";
import image2 from "../assets/KamakhyaTemple.jpg";
import image3 from "../assets/Majuli.jpg";

const Assam = () => {
  const places = [
    {
      name: "Kaziranga National Park",
      image: image1,
      description:
        "Home to the world's largest population of one-horned rhinoceroses",
      speciality:
        "Kaziranga National Park, located in the Golaghat and Nagaon districts of Assam, is a UNESCO World Heritage Site. It is famous for its rich biodiversity, including the highest density of tigers among protected areas in the world.",
    },
    {
      name: "Kamakhya Temple",
      image: image2,
      description: "Important Hindu pilgrimage site",
      speciality:
        "Kamakhya Temple, situated atop Nilachal Hill in Guwahati, is one of the most revered Hindu shrines in India. Dedicated to the goddess Kamakhya, it attracts thousands of devotees and tourists, especially during the Ambubachi Mela.",
    },
    {
      name: "Majuli",
      image: image3,
      description: "World's largest river island",
      speciality:
        "Majuli, located on the Brahmaputra River in Assam, is the world's largest river island. It is known for its vibrant culture, rich biodiversity, and traditional Vaishnavite monasteries (Satras), which are centers of Assamese art and culture.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Assam!</h1>
      <p className="text-lg mb-6 text-center">
        Assam, known as the "Land of the Red River and Blue Hills", is famous
        for its tea gardens, rich wildlife, and vibrant culture.
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

export default Assam;
