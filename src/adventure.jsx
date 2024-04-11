import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faTrain } from "@fortawesome/free-solid-svg-icons";

const places = [
  {
    name: "Ziro Valley",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/A_cross_section_of_luch_green_valley_of_Ziro.jpg/1280px-A_cross_section_of_luch_green_valley_of_Ziro.jpg",
    description:
      "Stunning landscapes, rich tribal culture, and trekking opportunities.",
    airport: "Ziro Airport",
    station: "Naharlagun station",
  },
  {
    name: "Chopta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Majuli_Island.jpg/238px-Majuli_Island.jpg",
    description:
      "Base for the trek to Tungnath, the highest Shiva temple, offering stunning views of the Himalayas.",
    airport: "Jolly Grant airport",
    station: "Rishikesh station",
  },
  {
    name: "Guhagar Beach",
    image:
      "https://imgs.search.brave.com/owTy9GMSEMpNV0RNxvk0aJrVpyiS1RoqAIdjKer1nTs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ndWhh/Z2FyLmluZC5pbi9p/bWFnZXMveGd1aGFn/YXItYmVhY2gtMy5q/cGcucGFnZXNwZWVk/LmljLkstRVBDdnZZ/RzIuanBn",
    description:
      "Known for its untouched beauty, swimming, beach walks, and exploring nearby temples.",
    airport: "Chatrapati Shivaji International Airport",
    station: "Chiplun station",
  },
  {
    name: "Zanskar Valley",
    image:
      "https://imgs.search.brave.com/ebTJipkQBDYeldgvHX1t6RbFU96b1k-kvtLlOc6QReE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by9tc2lk/LTg1MTc2NjYyLHdp/ZHRoLTk2LGhlaWdo/dC02NS5jbXM",
    description:
      "Paradise for adventure enthusiasts with Chadar Trek, white-water rafting, camping, and exploring Buddhist monasteries.",
    airport: "Kushok Bakula",
    station: "Jammu Tawi",
  },
  {
    name: "Living Root Bridges",
    image:
      "https://imgs.search.brave.com/ht0Xy76kPqL_5VxhNU-xbqm07acIudbVCFZzR_BaLpw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly92YWxs/ZXlvZmZsb3dlcnMu/aW5mby93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNi9WYWxs/ZXktb2YtZmxvd2Vy/cy1waXR1cmUtZ2Fs/bGVyeS1hbmQtd2Fs/bHBhcGVyLTMuanBn",
    description:
      "Unique bioengineering marvels created by the local tribes. Trekking to Living Root Bridges, caving in the Mawsmai Caves, exploring waterfalls.",
    airport: "Guwahati airport",
    station: "Guwahati station",
  },
  {
    name: "Valley of Flowers",
    image:
      "https://imgs.search.brave.com/B36RZ_ldwcUOZqOMPCOx6ONmUumZbgxZQBaNYNo3AHc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA4/NDAwNzYyMC9waG90/by90cmVlLXJvb3Rz/LWJyaWRnZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WmdG/MEg5RVlGVDZYSFRr/RHhrWktsZW1jVS1L/dloxNkdxdVJNQVJJ/bXNPZz0",
    description:
      "Famous for colorful flowers, alpine meadows, camping amidst the flowers, and breathtaking beauty.",
    airport: "Jolly Grant Airport",
    station: "Dehradun Station",
  },
  {
    name: "Tirthan Valley",
    image: "https://en-media.thebetterindia.com/uploads/2016/06/dsc_5590.jpg",
    description:
      "Tranquil river setting amidst the Himalayas, ideal for angling and exploring untouched waters.",
    airport: "Bhutan airport",
    station: "Joginder station",
  },
  {
    name: "Dhanushkodi",
    image:
      "https://revolvingcompass.com/wp/wp-content/uploads/2023/03/Dhanushkodi_14.jpg",
    description:
      "Abandoned town with hauntingly beautiful landscape, ruins, beaches, and a ghostly railway station.",
    airport: "Madurai airport",
    station: "Rameshwaram stn",
  },
  {
    name: "Agatti Island",
    image:
      "https://imgs.search.brave.com/HMufhLTzhfkCnuRwo1isBQFfWA4Y0VYH6VKSIH0g53U/rs:fit:500:0:0/g:ce/aHR0cDovL3d3dy5s/YWtzaGFkd2VlcHRy/YXZlbGd1cnUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzExL2FnYXR0aS1p/c2xhbmQxLTEuanBn",
    description:
      "Agatti Island in the Lakshadweep archipelago is a hidden gem with pristine beaches, coral reefs, and crystal-clear waters.",
    airport: "Agatti Airport",
    station: "No train",
  },
];
const handleViewDetails = (placeName) => {
  alert(`Details for ${placeName}`);
};

function AdventurousPlaces() {
  return (
    <div className="p-5">
      <h1 className="text-[5rem] font-black text-teal-800 text-opacity-50 text-center mb-10">
        Adventurous Places
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden shadow-md transform transition-transform hover:scale-105"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl text-teal-800 mb-2">
                {place.name}
              </h2>
              <p className="text-sm text-center font-serif mb-4">
                {place.description}
              </p>
              <div className="text-center">
                <h2 className="font-bold">Connectivity:</h2>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faPlane} className="mr-2" />
                  Nearest Airport: {place.airport}
                </p>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faTrain} className="mr-2" />
                  Nearest Station: {place.station}
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <button
                  className="border-2 rounded-2xl w-32 font-bold text-white p-1 text-lg bg-teal-500 hover:bg-teal-300"
                  onClick={() => handleViewDetails(place.name)}
                >
                  View details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdventurousPlaces;
