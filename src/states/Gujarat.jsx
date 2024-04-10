import React from "react";
import image1 from "../assets/Rann.jpg";
import image2 from "../assets/Gir.jpg";
import image3 from "../assets/Sabarmati.jpg";

const Gujarat = () => {
  const places = [
    {
      name: "Rann of Kutch",
      image: image1,
      description: "Vast salt marsh in the Thar Desert",
      speciality:
        "The Rann of Kutch is a seasonal salt marsh located in the Thar Desert. It is known for its surreal white desert landscape, especially during the Rann Utsav festival.",
    },
    {
      name: "Gir Forest National Park",
      image: image2,
      description: "Home to the Asiatic lion",
      speciality:
        "Gir Forest National Park, also known as Sasan Gir, is the last refuge of the Asiatic lion. It is the only place in the world where these majestic creatures are found in the wild.",
    },
    {
      name: "Sabarmati Ashram",
      image: image3,
      description: "Residence of Mahatma Gandhi",
      speciality:
        "Sabarmati Ashram, located on the banks of the Sabarmati River in Ahmedabad, was the residence of Mahatma Gandhi. It played a significant role in India's struggle for independence and is now a national monument.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Gujarat!
      </h1>
      <p className="text-lg mb-6 text-center">
        Gujarat, known for its rich cultural heritage, historical landmarks, and
        vibrant festivals, offers a unique blend of tradition and modernity.
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

export default Gujarat;
