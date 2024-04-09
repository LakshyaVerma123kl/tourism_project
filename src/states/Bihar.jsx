import React from "react";
import image1 from "../assets/MahabodhiTemple.jpg";
import image2 from "../assets/NalandaUniversity.jpg";
import image3 from "../assets/Vikramshila.jpg";

const Bihar = () => {
  const places = [
    {
      name: "Mahabodhi Temple",
      image: image1,
      description: "A UNESCO World Heritage Site",
      speciality:
        "Mahabodhi Temple, located in Bodh Gaya, is a UNESCO World Heritage Site and one of the most sacred places for Buddhists. It marks the spot where Gautama Buddha is said to have attained enlightenment under the Bodhi tree.",
    },
    {
      name: "Nalanda University",
      image: image2,
      description: "Ancient center of learning",
      speciality:
        "Nalanda University, located near Patna, was one of the earliest and most renowned centers of learning in the ancient world. It attracted scholars and students from all over the world and played a significant role in the development of Buddhism.",
    },
    {
      name: "Vikramshila",
      image: image3,
      description: "Ancient Buddhist university",
      speciality:
        "Vikramshila was an ancient Buddhist university located in present-day Bihar. It was established during the Pala Empire and was known for its studies in Buddhist philosophy, tantra, and logic. Although now in ruins, it remains an important archaeological site.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Bihar!</h1>
      <p className="text-lg mb-6 text-center">
        Bihar, located in the eastern part of India, is renowned for its rich
        cultural heritage and historical significance.
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

export default Bihar;
