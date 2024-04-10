import React, { useState } from "react";

function Off() {
  const [showStates, setShowStates] = useState(false);

  const toggleStates = () => {
    setShowStates(!showStates);
  };

  const handleClick = (state) => {
    alert(`Clicked on ${state}`);
  };

  const states = [
    "Adventure",
    "Spiritual",
    "Cultural",
    "Scenic",
    "Rural Experience",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="m-8 text-4xl font-bold font-serif text-gray-700 text-center">
        Choose your Desired Type
      </div>

      <button
        className="w-48 rounded-lg bg-gray-200 text h-11 tracking-wide font-semibold
        active:bg-gray-300 duration-300 hover:bg-gray-300 
        active:border-white shadow-lg mb-4"
        onClick={toggleStates}
      >
        {showStates ? "Hide Types" : "Show Types"}
      </button>

      {showStates && (
        <div className="w-72 border-2 bg-white overflow-scroll rounded-lg shadow-lg p-4">
          <ul>
            {states.map((state, index) => (
              <li
                key={index}
                className="hover:bg-gray-200 rounded-lg cursor-pointer py-2 px-4 mb-1"
                onClick={() => handleClick(state)}
              >
                {state}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!showStates && (
        <div className="text-sm mt-4 text-center font-semibold">
          <p>Click the button to show types</p>
        </div>
      )}
    </div>
  );
}

export default Off;
