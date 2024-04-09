import React from "react";
import image1 from "./assets/DalLake.jpg";
import image2 from "./assets/Gulmarg.jpg";
import image3 from "./assets/VaishnoDevi.jpg";

const JammuAndKashmir = () => {
  const places = [
    {
      name: "Dal Lake",
      image: image1,
      description: "Iconic lake known for its houseboats and shikara rides",
      speciality:
        "Dal Lake is a picturesque lake located in Srinagar, the summer capital of Jammu and Kashmir. It is renowned for its serene beauty, floating gardens, and traditional houseboats. Visitors can enjoy relaxing shikara rides, explore the vibrant floating markets, and witness stunning sunsets over the tranquil waters.",
    },
    {
      name: "Gulmarg",
      image: image2,
      description: "Famous hill station and skiing destination",
      speciality:
        "Gulmarg is a popular hill station and skiing destination located in the Pir Panjal range of the Himalayas. It is known for its snow-covered slopes, lush meadows, and breathtaking views of the surrounding peaks. Visitors can enjoy a range of outdoor activities such as skiing, snowboarding, trekking, and golfing.",
    },
    {
      name: "Vaishno Devi",
      image: image3,
      description: "Hindu pilgrimage site dedicated to Goddess Vaishno Devi",
      speciality:
        "Vaishno Devi Temple is a renowned Hindu pilgrimage site located in the Trikuta Mountains near Katra in Jammu and Kashmir. It is dedicated to Goddess Vaishno Devi and attracts millions of devotees each year. Visitors have to undertake a challenging trek of approximately 13 kilometers to reach the temple, which is believed to fulfill their wishes and grant spiritual blessings.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Jammu and Kashmir!
      </h1>
      <p className="text-lg mb-6 text-center">
        Jammu and Kashmir, often referred to as "Paradise on Earth", is known
        for its stunning landscapes, snow-capped mountains, and rich cultural
        heritage. Explore its serene lakes, majestic mountains, and sacred
        pilgrimage sites.
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

export default JammuAndKashmir;
