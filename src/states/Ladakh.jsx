import React from "react";
import image1 from "../assets/Pangong.jpg";
import image2 from "../assets/Nubra.jpeg";
import image3 from "../assets/Thiksey.jpg";

const Ladakh = () => {
  const places = [
    {
      name: "Pangong Lake",
      image: image1,
      description: "Scenic lake famous for its changing colors",
      speciality:
        "Pangong Lake is a breathtakingly beautiful lake situated at an altitude of 4,350 meters in the Himalayas. It is known for its mesmerizing blue waters that change colors throughout the day, reflecting different shades of blue, green, and turquoise. The lake gained popularity after being featured in the Bollywood movie '3 Idiots'. Visitors can enjoy camping by the lakeside and marvel at the stunning landscape.",
    },
    {
      name: "Nubra Valley",
      image: image2,
      description: "High-altitude desert valley with sand dunes",
      speciality:
        "Nubra Valley is a picturesque valley located in the northeastern part of Ladakh. It is known for its stark beauty, high-altitude desert landscape, and unique sand dunes. Visitors can enjoy camel rides on the double-humped Bactrian camels, explore ancient monasteries, and soak in the tranquility of the surrounding mountains.",
    },
    {
      name: "Thiksey Monastery",
      image: image3,
      description: "Magnificent Buddhist monastery with panoramic views",
      speciality:
        "Thiksey Monastery is a prominent Buddhist monastery located atop a hill in the Indus Valley, approximately 19 kilometers east of Leh. It is renowned for its architectural beauty, intricate murals, and stunning panoramic views of the surrounding mountains. Visitors can explore its various prayer halls, stupas, and ancient artifacts, and witness the daily rituals performed by the monks.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Ladakh!
      </h1>
      <p className="text-lg mb-6 text-center">
        Ladakh, often referred to as the "Land of High Passes", is renowned for
        its rugged terrain, majestic mountains, and vibrant culture. Explore its
        pristine lakes, ancient monasteries, and surreal landscapes.
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

export default Ladakh;
