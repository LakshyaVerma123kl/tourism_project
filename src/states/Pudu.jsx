import React from "react";
import image1 from "../assets/Auroville.jpg";
import image2 from "../assets/Promenade.jpeg";
import image3 from "../assets/Arikamedu.jpg";

const Puducherry = () => {
  const places = [
    {
      name: "Auroville",
      image: image1,
      description: "International township dedicated to human unity",
      speciality:
        "Auroville is an international township located in Viluppuram district of Tamil Nadu, near Puducherry. It was founded in 1968 with the purpose of realizing human unity and fostering peace and harmony. Visitors can explore its unique architecture, participate in workshops, and enjoy its serene ambiance.",
    },
    {
      name: "Promenade Beach",
      image: image2,
      description: "Popular seafront promenade",
      speciality:
        "Promenade Beach, also known as Rock Beach, is a popular seafront promenade located in the heart of Puducherry. Visitors can enjoy leisurely walks along the beach, indulge in water sports, or simply relax and soak in the scenic views. The promenade is lined with cafes, restaurants, and shops offering a variety of cuisines and souvenirs.",
    },
    {
      name: "Arikamedu",
      image: image3,
      description: "Ancient archaeological site",
      speciality:
        "Arikamedu is an ancient archaeological site located about 7 kilometers from Puducherry town. It was an important trading port during the Roman period, serving as a gateway for trade between India and the Roman Empire. Visitors can explore the ruins of ancient warehouses, pottery kilns, and Roman artifacts, providing insights into the region's rich history and maritime trade.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Puducherry!
      </h1>
      <p className="text-lg mb-6 text-center">
        Puducherry, also known as Pondicherry, is a charming coastal town with a
        unique blend of French and Indian cultures. Explore its tranquil
        beaches, vibrant markets, and rich heritage.
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

export default Puducherry;
