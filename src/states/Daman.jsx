import React from "react";
import image1 from "../assets/Dadra.jpg";
import image2 from "../assets/Diu.jpg";
import image3 from "../assets/Nani.jpg";

const DadraNagarHaveliDamanDiu = () => {
  const places = [
    {
      name: "Dadra Garden",
      image: image1,
      description: "Picturesque garden with a mini zoo and musical fountain",
      speciality:
        "Dadra Garden, also known as Vandhara Garden, is a picturesque garden located in Dadra and Nagar Haveli. It features lush greenery, colorful flower beds, and a mini zoo with various species of birds and animals. Visitors can also enjoy the mesmerizing musical fountain show in the evenings.",
    },
    {
      name: "Diu Fort",
      image: image2,
      description: "Historic Portuguese fort overlooking the Arabian Sea",
      speciality:
        "Diu Fort is a historic fort located on the eastern end of Diu Island in Daman and Diu. Built by the Portuguese in the 16th century, the fort offers panoramic views of the Arabian Sea and the surrounding coastline. Visitors can explore its massive walls, cannons, lighthouse, and ancient churches.",
    },
    {
      name: "Nani Daman Beach",
      image: image3,
      description: "Quaint beach with a tranquil ambiance",
      speciality:
        "Nani Daman Beach is a quaint beach located in the town of Daman in Daman and Diu. It is known for its serene ambiance, golden sands, and gentle waves. Visitors can relax on the beach, enjoy a leisurely stroll along the shore, or indulge in water sports such as swimming and jet skiing.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Dadra and Nagar Haveli and Daman and Diu!
      </h1>
      <p className="text-lg mb-6 text-center">
        Dadra and Nagar Haveli and Daman and Diu, located along the western
        coast of India, offer a perfect blend of natural beauty, rich history,
        and vibrant culture. Explore its charming gardens, historic forts, and
        tranquil beaches.
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

export default DadraNagarHaveliDamanDiu;
