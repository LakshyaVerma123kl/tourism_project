import React from "react";
import image1 from "../assets/Konark.jpeg";
import image2 from "../assets/JagannathT.jpeg";
import image3 from "../assets/Chilika.jpg";

const Odisha = () => {
  const handleClick = () => {
    alert("You clicked on View Details!");
  };
  const places = [
    {
      name: "Konark Sun Temple",
      image: image1,
      description: "UNESCO World Heritage Site",
      speciality:
        "The Konark Sun Temple is a UNESCO World Heritage Site dedicated to the Hindu Sun God Surya. It is renowned for its architectural grandeur and exquisite stone carvings.",
    },
    {
      name: "Jagannath Temple",
      image: image2,
      description: "Sacred Hindu temple in Puri",
      speciality:
        "The Jagannath Temple in Puri is a sacred Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu. It is one of the Char Dham pilgrimage sites and hosts the famous Rath Yatra festival.",
    },
    {
      name: "Chilika Lake",
      image: image3,
      description: "Largest coastal lagoon in India",
      speciality:
        "Chilika Lake is the largest coastal lagoon in India and the second largest lagoon in the world. It is known for its rich biodiversity, including migratory birds, dolphins, and fish species.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Odisha!
      </h1>
      <p className="text-lg mb-6 text-center">
        Odisha, known for its rich cultural heritage and stunning natural
        beauty, offers a treasure trove of tourist attractions for visitors.
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

export default Odisha;
