import React from "react";
import image1 from "../assets/AgattiIsland.jpg";
import image2 from "../assets/KavarattiIsland.jpg";
import image3 from "../assets/BangaramIsland.jpg";

const Lakshadweep = () => {
  const places = [
    {
      name: "Agatti Island",
      image: image1,
      description: "Beautiful island with pristine beaches and coral reefs",
      speciality:
        "Agatti Island is one of the most beautiful islands in Lakshadweep, known for its pristine beaches, crystal-clear waters, and vibrant coral reefs. Visitors can indulge in activities such as snorkeling, scuba diving, and kayaking to explore the rich marine life and colorful coral gardens. The island also offers breathtaking views of the surrounding turquoise lagoon.",
    },
    {
      name: "Kavaratti Island",
      image: image2,
      description: "Capital of Lakshadweep with sandy beaches and lagoons",
      speciality:
        "Kavaratti Island is the administrative capital of Lakshadweep and is known for its sandy beaches, calm lagoons, and coconut groves. Visitors can explore the island's rich marine life by snorkeling, diving, or taking glass-bottom boat rides. The island also houses various attractions such as the Ujra Mosque, Marine Aquarium, and Dolphin Dive Center.",
    },
    {
      name: "Bangaram Island",
      image: image3,
      description: "Secluded island paradise with turquoise waters",
      speciality:
        "Bangaram Island is a secluded paradise in Lakshadweep, known for its pristine beaches, turquoise lagoons, and swaying palm trees. It offers a perfect getaway for travelers seeking peace and tranquility away from the hustle and bustle of city life. Visitors can relax on the beach, indulge in water sports, or simply soak in the breathtaking natural beauty of the island.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Lakshadweep!
      </h1>
      <p className="text-lg mb-6 text-center">
        Lakshadweep, a group of islands in the Arabian Sea, is renowned for its
        pristine beaches, vibrant coral reefs, and crystal-clear waters. Explore
        its secluded islands, indulge in water sports, and unwind in the lap of
        nature.
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

export default Lakshadweep;
