import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { PiList } from "react-icons/pi";
import { PiHouseFill } from "react-icons/pi";

import { MdOutlineCreate } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";

import { HiComputerDesktop } from "react-icons/hi2";

import { useEffect, useRef, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { TbBrightnessUp } from "react-icons/tb";
import { FAKE_DATA_PROFILE } from "../data/data";

const Navbar = () => {
  const [darkMode, setToggleMode] = useState(localStorage.theme);
  const [toggleDropdownSettings, setToggleDropdownSettings] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // automatically check os system preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else if (
      localStorage.theme === "light" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: light)").matches)
    ) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    // on user mode toggle

    if (darkMode === "") localStorage.removeItem("theme");
    if (darkMode === "dark") document.documentElement.classList.add("dark");
    if (darkMode === "light") document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const links = [
    "Settings",
    "Saved",
    "Your likes",
    "Report a problem",
    "Log out",
  ];
  const [appearanceShow, setAppearanceShow] = useState(false);
  function toggleMenu() {
    setAppearanceShow(false);
    setToggleDropdownSettings(!toggleDropdownSettings);
  }
  return (
    <>
      <div
        className="sticky z-10 top-0 flex justify-between items-center bg-white dark:bg-black text-black/40 dark:text-[#a3a3a3]/60 
        "
      >
        <a href="#" className="p-6 invisible sm:visible home-icon ">
          <IoBookOutline size={"2rem"} />
        </a>

        <a
          href="#"
          className="visible sm:hidden px-6 dark:hover:bg-neutral-800 "
        >
          <IoBookOutline size={"2rem"} />
        </a>
        <div className="hidden sm:visble sm:flex justify-center min-sm:hidden">
          <a
            href="#"
            className="px-6 py-3 hover:bg-neutral-100 rounded-lg dark:hover:bg-neutral-800 "
          >
            <PiHouseFill size={"2rem"} />
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
        <div className="px-6 h-fit w-fit">
          <a
            href="#"
            className="dark:menu-hover relative select-none"
            onClick={() => toggleMenu()}
          >
            <PiList size={"2rem"} />
          </a>
          {toggleDropdownSettings && (
            <div
              className={` flex flex-col bg-white dark:bg-neutral-900 ${
                appearanceShow ? " w-72" : "w-44"
              } shadow-lg absolute right-[-10px] rounded-lg mr-4`}
            >
              {appearanceShow ? (
                <div className="p-4 gap-2">
                  <div className="relative text-center">
                    <FaArrowLeftLong
                      onClick={() => setAppearanceShow(false)}
                      className=" absolute top-1 left-0 cursor-pointer "
                    />
                    <h3>Appearance</h3>
                  </div>
                  <div className="flex justify-center mt-2">
                    <div
                      className="px-4 py-1 flex items-center cursor-pointer"
                      onClick={() => setToggleMode("dark")}
                    >
                      <FaRegMoon
                        color={darkMode === "dark" ? "white" : ""}
                        size={"1.5rem"}
                      />
                    </div>
                    <div
                      className={`px-4 py-1 flex items-center cursor-pointer rounded-lg ${
                        darkMode === "light" && "bg-neutral-900"
                      } `}
                      onClick={() => setToggleMode("light")}
                    >
                      <TbBrightnessUp
                        color={darkMode === "light" ? "white" : ""}
                        size={"1.5rem"}
                      />
                    </div>
                    <div
                      className={`px-4 py-1 flex items-center cursor-pointer rounded-lg ${
                        darkMode === "" && "bg-neutral-900"
                      } `}
                      onClick={() => setToggleMode("")}
                    >
                      <HiComputerDesktop
                        color={darkMode === "" ? "white" : ""}
                        size={"1.5rem"}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  className=" p-3 text-left rounded-t-lg font-[400]"
                  onClick={() => setAppearanceShow(true)}
                >
                  Appearance
                </button>
              )}
              {!appearanceShow &&
                links.map((link) => (
                  <a
                    className="p-3 border-t border-neutral-200 dark:border-neutral-600 font-[400]"
                    key={link}
                  >
                    {link}
                  </a>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
