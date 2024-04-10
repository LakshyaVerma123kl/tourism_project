import React from "react";
import image1 from "../assets/Golden.jpeg";
import image2 from "../assets/Wagah.jpg";
import image3 from "../assets/Jallianwala.jpeg";

const Punjab = () => {
  const places = [
    {
      name: "Golden Temple",
      image: image1,
      description: "Sacred Sikh shrine in Amritsar",
      speciality:
        "The Golden Temple, also known as Sri Harmandir Sahib, is the holiest shrine of Sikhism. It is known for its stunning architecture, golden dome, and spiritual significance.",
    },
    {
      name: "Wagah Border",
      image: image2,
      description: "Border crossing between India and Pakistan",
      speciality:
        "The Wagah Border is a border crossing between India and Pakistan, located near Amritsar. It is famous for the ceremonial Wagah Border ceremony, which takes place every evening and attracts crowds from both countries.",
    },
    {
      name: "Jallianwala Bagh",
      image: image3,
      description: "Historical site of a tragic massacre",
      speciality:
        "Jallianwala Bagh is a public garden in Amritsar that serves as a memorial to the Jallianwala Bagh massacre of 1919, in which British troops fired on a peaceful gathering of unarmed civilians, killing hundreds.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Punjab!
      </h1>
      <p className="text-lg mb-6 text-center">
        Punjab, often referred to as the "Land of Five Rivers", is known for its
        rich cultural heritage, vibrant festivals, and delicious cuisine.
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

export default Punjab;
