import React from "react";
import image1 from "../assets/SultanpurNationalPark.jpg";
import image2 from "../assets/Surajkund.jpg";
import image3 from "../assets/Kurukshetra.jpg";

const Haryana = () => {
  const places = [
    {
      name: "Sultanpur National Park",
      image: image1,
      description: "Bird sanctuary near Gurugram",
      speciality:
        "Sultanpur National Park, located in Gurgaon district, is a popular bird sanctuary known for its rich birdlife, especially during the winter months when migratory birds visit the area.",
    },
    {
      name: "Surajkund",
      image: image2,
      description: "Historical reservoir and crafts fair",
      speciality:
        "Surajkund is an ancient reservoir located in Faridabad district. It is famous for the Surajkund Crafts Mela, an annual cultural festival that showcases traditional crafts and artworks.",
    },
    {
      name: "Kurukshetra",
      image: image3,
      description: "Historical and religious significance",
      speciality:
        "Kurukshetra is a city with historical and religious significance, known as the battlefield of the Mahabharata. It is home to various ancient temples and landmarks associated with Indian mythology.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Haryana!
      </h1>
      <p className="text-lg mb-6 text-center">
        Haryana, located in North India, is known for its rich cultural
        heritage, historical landmarks, and vibrant festivals.
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

export default Haryana;
