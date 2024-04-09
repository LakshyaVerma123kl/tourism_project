import React from "react";
import image1 from "../assets/BannerghattaNationalPark.jpg";
import image2 from "../assets/MysorePalace.jpg";
import image3 from "../assets/CubbonPark.jpg";

const Karnataka = () => {
  const places = [
    {
      name: "Bannerghatta National Park",
      image: image1,
      description: "Zoo and biological reserve near Bangalore",
      speciality:
        "Bannerghatta National Park, located near Bangalore, is a popular zoo and biological reserve known for its wildlife safari, butterfly park, and conservation programs.",
    },
    {
      name: "Mysore Palace",
      image: image2,
      description: "Historic palace in Mysore",
      speciality:
        "Mysore Palace, also known as the Amba Vilas Palace, is a historic palace located in the city of Mysore. It is renowned for its stunning architecture, grandeur, and cultural significance.",
    },
    {
      name: "Cubbon Park",
      image: image3,
      description: "Lush green space in Bangalore",
      speciality:
        "Cubbon Park is a sprawling green space located in the heart of Bangalore. It offers a peaceful retreat from the hustle and bustle of the city and features numerous walking paths, gardens, and historic buildings.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Karnataka!
      </h1>
      <p className="text-lg mb-6 text-center">
        Karnataka, known for its rich cultural heritage, vibrant cities, and
        diverse landscapes, offers a plethora of attractions for tourists.
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

export default Karnataka;
