import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { PiList } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { MdOutlineCreate } from "react-icons/md";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setToggleMode] = useState("");
  const [toggleDropdownSettings, setToggleDropdownSettings] = useState(false);

  useEffect(() => {
    if (darkMode === "") {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        localStorage.removeItem("theme");
      }
    }

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
    if (darkMode === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const links = [
    "Settings",
    "Saved",
    "Your likes",
    "Report a problem",
    "Log out",
  ];
  const [homeIconHover, setHomeIconHover] = useState(false);

  return (
    <>
      <div
        className={`sticky top-0 flex justify-between items-center m-1 bg-white dark:bg-black text-black dark:text-[#a3a3a3]
        }z-20`}
      >
        <a href="#" className="sm:w-10 px-6 home-icon">
          <IoBookOutline size={"2rem"} />
        </a>
        <a
          href="#"
          className="invisible sm:hidden sm:w-10 px-6 py-3 dark:hover:bg-neutral-800"
        >
          <IoBookOutline size={"2rem"} />
        </a>
        <div className="hidden sm:visble sm:flex justify-center min-sm:hidden">
          <a
            href="#"
            className="px-6 py-3 hover:bg-neutral-100 rounded-lg dark:hover:bg-neutral-800"
          >
            <GoHome size={"2rem"} />
          </a>
          <a
            href="#"
            className="px-6 py-3 hover:bg-neutral-100 rounded-lg dark:hover:bg-neutral-800"
          >
            <IoSearch size={"2rem"} />
          </a>
          <a
            href="#"
            className="px-6 py-3 hover:bg-neutral-100 rounded-lg dark:hover:bg-neutral-800"
          >
            <MdOutlineCreate size={"2rem"} />
          </a>
          <a
            href="#"
            className="px-6 py-3 hover:bg-neutral-100 rounded-lg dark:hover:bg-neutral-800"
          >
            <FaRegHeart size={"2rem"} />
          </a>
          <a
            href="#"
            className="px-6 py-3 hover:bg-neutral-100 rounded-lg dark:hover:bg-neutral-800"
          >
            <FaRegUser size={"2rem"} />
          </a>
        </div>
        <div className="relative">
          <a
            href="#"
            className="sm:w-10 px-6 py-3 dark:menu-hover"
            onClick={() => setToggleDropdownSettings(!toggleDropdownSettings)}
          >
            <PiList id="menu" size={"2rem"} />
          </a>
          {toggleDropdownSettings && (
            <div className="flex flex-col bg-white dark:bg-neutral-900 w-44 shadow-lg absolute right-[-10px] rounded-lg">
              <button className=" p-3 text-left rounded-t-lg font-[400]">
                Appearance
              </button>
              {links.map((link) => (
                <a className="p-3 border-t border-neutral-200 dark:border-neutral-600 font-[400]">
                  {link}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* <a href="#">Log in</a>
      <a href="#">Sign up</a> */}
      </div>
      <button
        onClick={() => setToggleMode("dark")}
        className="text-black dark:text-white"
      >
        DARK MODE
      </button>
      <button
        onClick={() => setToggleMode("light")}
        className="text-black dark:text-white"
      >
        LIGHT MODE
      </button>
      <button
        onClick={() => setToggleMode("")}
        className="text-black dark:text-white"
      >
        OS MODE
      </button>
    </>
  );
};

export default Navbar;
