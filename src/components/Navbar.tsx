import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { PiList } from "react-icons/pi";
import { GoHome, GoHeart } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
// import { FAKE_DATA_PROFILE } from "../data/data";
let element = document.getElementById("html");

let HTMLDARK = element?.classList.contains("dark");

// function toggleDarkMode() {
//   element?.classList.add("dark");
// }
// function toggleLightMode() {
//   element?.classList.remove("dark");
// }

const Navbar = () => {
  const [darkMode, setToggleMode] = useState(HTMLDARK);

  const toggleDarkMode = () => {
    if (!darkMode) {
      element?.classList.add("dark");
      setToggleMode(true);
    } else {
      element?.classList.remove("dark");
      setToggleMode(false);
    }
  };

  // useEffect(() => {
  //   if (!toggleMode) {
  //     element?.classList.add("dark");
  //     darkMode = true;
  //   } else {
  //     element?.classList.remove("dark");
  //     darkMode = false;
  //   }
  // }, [toggleMode]);
  return (
    <>
      <div
        className={`sticky top-0 flex justify-between p-4 bg-white dark:bg-black text-black dark:text-white
        }z-20`}
      >
        <a href="#" className="invisible sm:hidden sm:w-10">
          <IoBookOutline size={"2rem"} color={darkMode ? "white" : "black"} />
        </a>
        <a href="#" className=" sm:w-10">
          <IoBookOutline size={"2rem"} color={darkMode ? "white" : "black"} />
        </a>
        <div className="hidden sm:visble sm:flex justify-center space-x-10 min-sm:hidden">
          <a href="#">
            <GoHome size={"2rem"} color={darkMode ? "white" : "black"} />
          </a>
          <a href="#">
            <IoSearch size={"2rem"} color={darkMode ? "white" : "black"} />
          </a>
          <a href="#">
            <IoCreateOutline
              size={"2rem"}
              color={darkMode ? "white" : "black"}
            />
          </a>
          <a href="#">
            <GoHeart size={"2rem"} color={darkMode ? "white" : "black"} />
          </a>
          <a href="#">
            <FaRegUser size={"2rem"} color={darkMode ? "white" : "black"} />
          </a>
        </div>
        <a href="#" className=" sm:w-10 ">
          <PiList size={"2rem"} color={darkMode ? "white" : "black"} />
        </a>

        {/* <a href="#">Log in</a>
      <a href="#">Sign up</a> */}
      </div>
      <button onClick={toggleDarkMode} className="text-black dark:text-white">
        CHANG MODE
      </button>
    </>
  );
};

export default Navbar;
