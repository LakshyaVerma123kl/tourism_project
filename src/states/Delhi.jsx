import React from "react";
import image1 from "../assets/IndiaGate.jpg";
import image2 from "../assets/QutubMinar.jpg";
import image3 from "../assets/LotusTemple.jpg";

const Delhi = () => {
  const places = [
    {
      name: "India Gate",
      image: image1,
      description: "War memorial and iconic landmark",
      speciality:
        "India Gate is a war memorial located in the heart of New Delhi. It was built in memory of the Indian soldiers who died in World War I. The monument is surrounded by lush green lawns and serves as a popular spot for picnics and evening strolls.",
    },
    {
      name: "Qutub Minar",
      image: image2,
      description: "Tallest brick minaret in the world",
      speciality:
        "Qutub Minar is a UNESCO World Heritage Site and the tallest brick minaret in the world, located in Mehrauli, Delhi. It was built in the 12th century by Qutb-ud-din Aibak, the founder of the Delhi Sultanate. Visitors can admire its intricate carvings and climb to the top for panoramic views of the city.",
    },
    {
      name: "Lotus Temple",
      image: image3,
      description: "Bahá'í House of Worship known for its lotus-like shape",
      speciality:
        "Lotus Temple, also known as the Bahá'í House of Worship, is a prominent landmark in Delhi. It is renowned for its distinctive lotus-like shape and serves as a place of worship for people of all faiths. The temple's serene ambiance and beautiful architecture make it a must-visit attraction.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Delhi!</h1>
      <p className="text-lg mb-6 text-center">
        Delhi, the capital city of India, is a vibrant metropolis known for its
        rich history, diverse culture, and architectural marvels. Explore its
        iconic landmarks, bustling markets, and mouth-watering street food.
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

export default Delhi;
