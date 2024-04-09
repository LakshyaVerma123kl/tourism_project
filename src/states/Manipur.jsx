import React from "react";
import image1 from "../assets/LoktakLake.jpg";
import image2 from "../assets/KeibulLamjaoNationalPark.jpg";
import image3 from "../assets/KanglaFort.jpg";

const Manipur = () => {
  const places = [
    {
      name: "Loktak Lake",
      image: image1,
      description: "Largest freshwater lake in Northeast India",
      speciality:
        "Loktak Lake is the largest freshwater lake in Northeast India and is known for the floating phumdis (heterogeneous mass of vegetation, soil, and organic matter) on its surface.",
    },
    {
      name: "Keibul Lamjao National Park",
      image: image2,
      description: "Only floating national park in the world",
      speciality:
        "Keibul Lamjao National Park is the only floating national park in the world. It is located in the Loktak Lake and is home to the endangered Sangai deer, also known as the dancing deer.",
    },
    {
      name: "Kangla Fort",
      image: image3,
      description: "Historical and cultural landmark in Imphal",
      speciality:
        "Kangla Fort, located in Imphal, is a historical and cultural landmark of Manipur. It was the seat of political power in Manipur for centuries and holds great significance for the Manipuri people.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Manipur!
      </h1>
      <p className="text-lg mb-6 text-center">
        Manipur, often referred to as the "Switzerland of India", is known for
        its breathtaking natural beauty, vibrant culture, and rich heritage.
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

export default Manipur;
