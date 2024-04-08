import React from "react";

function Loader() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <div className="loader-container animate-spin border-4 border-teal-500 rounded-full h-16 w-16 flex justify-center items-center">
        <div className="loader-core bg-teal-500 rounded-full h-6 w-6 animate-bounce"></div>
      </div>
      <div className="text-teal-500 font-semibold mt-2 text-lg animate-pulse">
        NamasteNomad
      </div>
    </div>
  );
}

export default Loader;
