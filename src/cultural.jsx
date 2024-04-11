import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faTrain } from "@fortawesome/free-solid-svg-icons";

function CulturalPlaces() {
  const places = [
    {
      name: "Shekhawati, Rajasthan",
      image:
        "https://imgs.search.brave.com/E992JJvBis8dMkhMtVDO8xhDgb9mde0x6yX1RpOg-80/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJpcHNhdnZ5LmNv/bS90aG1iL1ZGdHk5/cWJESDFWSTExUHlZ/UDRPWDZFS3J3ND0v/MTUwMHgwL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpL0RT/Q18wNjgyLTU2YTNj/NDQzM2RmNzhjZjc3/MjdmMGNiYi04M2Nk/MTdlYTA3ZWM0MmQ3/YmFlNGFiNDkzMzc1/NzdhZi5qcGc",
      description:
        "Known for its elaborate frescoes and Havelis, Shekhawati is a region rich in art and culture, showcasing the opulent lifestyle of Marwari merchants.",
      connectivity:
        "Nearest airport: Nani Jaipur Airport\nNearest station: Bikaner Station",
      airport: "Jaipur Airport",
      station: "Bikaner Station",
    },
    {
      name: "Purulia, West Bengal",
      image:
        "https://imgs.search.brave.com/EaeBHtq1kUOnqk7ffUq7hPHTwxCfhK_BJdbl3Ar69UQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hc3NldHR5cGUu/Y29tL291dGxvb2t0/cmF2ZWxsZXIvMjAy/My0xMi9mYzlkZGI0/Yy03Y2VkLTQ1OTMt/OGVhMy0xMGY0OTU1/NWY2NWYvQ2hoYXVf/bWFza3MuanBnP2F1/dG89Zm9ybWF0LGNv/bXByZXNz",
      description:
        "Known for its Chhau dance, a traditional tribal martial dance, Purulia offers a unique glimpse into tribal culture and art forms.",
      connectivity:
        "Nearest airport: DumDum Kolkata\nNearest station: Bishnupur Junction",
      airport: "Dumdum Kolkata",
      station: "Bishnupur Junction",
    },
    {
      name: "Mandu, Madhya Pradesh",
      image:
        "https://imgs.search.brave.com/cDRB5cg0cYxxm0nlW_IRrcZPt0tWWdiphEJV9PFkRsQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dG91cm15aW5kaWEu/Y29tL2ltYWdlcy9t/YW5kdS10b3VyaXNt/MS5qcGc",
      description:
        "A historical city with Afghan architecture, Mandu is known for its ancient forts, palaces, and romantic legends, offering a journey into medieval India.",
      connectivity:
        "Nearest airport: Khajurao\nNearest station: Jhansi Station",
      airport: "Khajurao Airport",
      station: "Jhansi Station",
    },
    {
      name: "Ajanta and Ellora Caves, Maharashtra",
      image:
        "https://imgs.search.brave.com/UpUVGod-a86vixUP_3g5fGJLbcbGMoJQS1FoKMvuKzE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJpcHNhdnZ5LmNv/bS90aG1iL2ZieV9s/enQ4YmlrTUtxS2xH/WXhreV9TU09UND0v/MTUwMHgwL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpL0dl/dHR5SW1hZ2VzLTQ4/MzQzOTc2Ni1lODVl/NzZjMzgwN2E0Mjk3/YWNhNjhjN2UyOTli/ZjA0Yy5qcGc",
      description:
        "UNESCO World Heritage Sites, these caves showcase ancient Indian art and culture, with beautiful rock-cut sculptures and paintings.",
      connectivity:
        "Nearest airport: Aurangabad Airport\nNearest station: Aurangabad Station",
      airport: "Aurangabad Airport",
      station: "Aurangabad Station",
    },
    {
      name: "Junagadh, Gujarat",
      image:
        "https://imgs.search.brave.com/b20NLkMQ3FiY7UZp-im1TUv64WQ0Dgp15GvJXRBrb2A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hc3NldHR5cGUu/Y29tL291dGxvb2t0/cmF2ZWxsZXIvaW1w/b3J0L291dGxvb2t0/cmF2ZWxsZXIvcHVi/bGljL3VwbG9hZHMv/YXJ0aWNsZXMvZXhw/bG9yZS8yMDE3LzAx/L2ZlYXR1cmVkLWlt/YWdlLTEyLmpwZz93/PTQ4MCZhdXRvPWZv/cm1hdCxjb21wcmVz/cyZmaXQ9bWF4",
      description:
        "Home to the Junagadh Fort and Uparkot Fort, this city has a rich history dating back to the Mauryan dynasty, with influences from Hindu, Buddhist, Jain, and Islamic cultures.",
      connectivity:
        "Nearest airport: Diu Airport\nNearest station: Junagadh Station",
      airport: "Diu Airport",
      station: "Junagadh Station",
    },
    {
      name: "Rishikesh, Uttarakhand",
      image:
        "https://imgs.search.brave.com/oFUrgEAEVkM-blPnBvUHaHL_AQMa29eLFbh89thkWUU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXV0dGFyYW5jaGFs/LmNvbS90b3VyaXNt/L3Bob3Rvcy9yaXNo/aWtlc2gtMzcxNTQ5/Ny5qcGc",
      description:
        'Known as the "Yoga Capital of the World," Rishikesh is a hub for spiritual seekers, offering ashrams, yoga centers, Ganga Aarti, and the Beatles Ashram.',
      connectivity:
        "Nearest airport: Jolly Grant Airport\nNearest station: Haridwar Station",
      airport: "Jolly Grant Airport",
      station: "Haridwar Station",
    },
    {
      name: "Madurai, Tamil Nadu",
      image:
        "https://imgs.search.brave.com/yD-05R_Z8YwCmcxHlJhwu050XLR7hvokN0NNqfxJz8M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bGl0ZXJhcnl0cmF2/ZWxlci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDMv/c2h1dHRlcnN0b2Nr/XzE5MDgzMTAzNy04/MDB4NTMwLmpwZw",
      description:
        "Famous for the Meenakshi Amman Temple, Madurai is one of the oldest continuously inhabited cities in India, known for its Dravidian architecture, culture, and literature.",
      connectivity:
        "Nearest airport: Madurai Airport\nNearest station: Madurai Station",
      airport: "Madurai Airport",
      station: "Madurai Station",
    },
    {
      name: "Jorhat, Assam",
      image:
        "https://imgs.search.brave.com/OJmqRI9PCOD_HBzTstrSprPOZ6Fvc01cNRRG0QA1YzA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by8xMDkw/NzM2NzMvTWFqdWxp/LUFzc2FtLmpwZz93/aWR0aD03NDgmcmVz/aXplPTQ",
      description:
        "A cultural hub in Assam, Jorhat is known for its historical monuments like Raja Maidam, tea gardens, and the Majuli river island with its unique Assamese culture.",
      connectivity:
        "Nearest airport: Rowriah Airport\nNearest station: Jorhat Station",
      airport: "Rowriah Airport",
      station: "Jorhat Station",
    },
    {
      name: "Rampur, Himachal Pradesh",
      image:
        "https://imgs.search.brave.com/BN7luUZSjuPMdApL2dhJjltfIxdRI7PwJTSSIbMKmVY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQ0L1Jh/bXB1cl9CdXNoYWhy/LmpwZy81MTJweC1S/YW1wdXJfQnVzaGFo/ci5qcGc",
      description:
        "Rampur Bushahr Palace, A historic palace with Indo-Tibetan architecture, showcasing the heritage and culture of the Rampur Bushahr princely state.",
      connectivity:
        "Nearest airport: Jubbarhatti Airport\nNearest station: Shimla Station",
      airport: "Jubbarhatti Airport",
      station: "Shimla Station",
    },
  ];

  const handleViewDetails = (placeName) => {
    alert(`Details for ${placeName}`);
  };

  return (
    <div className="p-5">
      <h1 className="text-[5rem] font-black text-teal-800 text-center text-opacity-50 mb-10 uppercase">
        Landmarks of Culture
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-white border-2 flex flex-col cursor-pointer shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={place.image}
              className="w-full object-cover h-48"
              alt={place.name}
            />
            <div className="p-4 flex flex-col flex-1">
              <h2 className="font-bold text-xl text-teal-800 mb-2">
                {place.name}
              </h2>
              <p className="text-sm text-gray-700 mb-4">{place.description}</p>
              <div className="flex flex-col">
                <h3 className="font-bold">Connectivity:</h3>
                {place.airport && (
                  <p className="text-sm flex items-center">
                    <FontAwesomeIcon icon={faPlane} className="mr-2" />
                    {place.airport}
                  </p>
                )}
                {place.station && (
                  <p className="text-sm flex items-center">
                    <FontAwesomeIcon icon={faTrain} className="mr-2" />
                    {place.station}
                  </p>
                )}
              </div>
              <div className="flex justify-center mt-auto">
                <button
                  className="border-2 rounded-2xl w-32 font-bold p-1 text-lg bg-teal-500 hover:bg-teal-300 text-white"
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

export default CulturalPlaces;
