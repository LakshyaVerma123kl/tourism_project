import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Slider() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const handleClickOutside = () => {
    if (ref.current.className.includes("hidden")) {
      ref.current.className = ref.current.className.replace("hidden ", "flex ");
      console.log(ref.current.className);
      return;
    }
    ref.current.className = ref.current.className.replace("flex ", "hidden ");
    console.log(ref.current.className);
  };
  const handletouch = (ref) => {
    ref.current.className += " bg-gray-200";
  };
  const handletouch2 = (ref) => {
    ref.current.className = ref.current.className.replace("bg-gray-200", "");
  };
  return (
    <div className="hidden max-sm:flex flex-col">
      <div onClick={handleClickOutside}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div
        ref={ref}
        className="bg-white absolute left-0 top-[3.1rem] z-20 hidden shadow-md h-auto flex-col w-[8rem]"
      >
        <NavLink to="/">
          <p
            onTouchStart={() => handletouch(ref2)}
            onTouchEnd={() => handletouch2(ref2)}
            ref={ref2}
            className="w-full py-2"
          >
            Home
          </p>
        </NavLink>
        <NavLink to="/packages">
          <p
            onTouchStart={() => handletouch(ref3)}
            onTouchEnd={() => handletouch2(ref3)}
            ref={ref3}
            className="w-full py-2"
          >
            Packages
          </p>
        </NavLink>
        <NavLink to="/team">
          <p
            onTouchStart={() => handletouch(ref4)}
            onTouchEnd={() => handletouch2(ref4)}
            ref={ref4}
            className="w-full py-2"
          >
            Team
          </p>
        </NavLink>
        <NavLink to="/about">
          <p
            onTouchStart={() => handletouch(ref5)}
            onTouchEnd={() => handletouch2(ref5)}
            ref={ref5}
            className="w-full py-2"
          >
            About
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Slider;
