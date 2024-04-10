import React from "react";
import image1 from "../assets/Alleppey.jpg";
import image2 from "../assets/Munnar.jpeg";
import image3 from "../assets/Athirappilly.jpeg";

const Kerala = () => {
  const handleClick = () => {
    alert("You clicked on View Details!");
  };
  const places = [
    {
      name: "Alleppey Backwaters",
      image: image1,
      description: "Network of interconnected canals and lakes",
      speciality:
        "The Alleppey Backwaters are a network of interconnected canals, lakes, and rivers located in the Alappuzha district. It is a popular tourist destination known for its serene beauty and houseboat cruises.",
    },
    {
      name: "Munnar",
      image: image2,
      description: "Hill station known for its tea plantations",
      speciality:
        "Munnar is a picturesque hill station located in the Western Ghats mountain range. It is known for its lush green tea plantations, misty valleys, and scenic beauty.",
    },
    {
      name: "Athirappilly Falls",
      image: image3,
      description: "Largest waterfall in Kerala",
      speciality:
        "Athirappilly Falls, located in Thrissur district, is the largest waterfall in Kerala. It is a popular tourist attraction known for its breathtaking beauty and surrounding lush greenery.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Kerala!
      </h1>
      <p className="text-lg mb-6 text-center">
        Kerala, known as "God's Own Country", is renowned for its tranquil
        backwaters, lush greenery, and rich cultural heritage.
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

export default Kerala;
