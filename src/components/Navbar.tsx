import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { PiList } from "react-icons/pi";
import { GoHome, GoHomeFill, GoHeart, GoHeartFill } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";
import { FAKE_DATA_PROFILE as mode } from "../data/data";

const Navbar = () => {
  return (
    <>
      {/* <div className={`sticky top-0 flex justify-between p-4 bg-${"black"}`}> */}
      <div
        className={`sticky top-0 flex justify-between p-4 bg-${
          mode.mode == "light" ? "white" : "black"
        } transition-colors duration-200 ease-linear`}
      >
        <a href="#" className="invisible sm:hidden sm:w-10">
          <IoBookOutline
            size={"2rem"}
            color={mode.mode == "dark" ? "white" : "black"}
          />
        </a>
        <a href="#" className=" sm:w-10">
          <IoBookOutline
            size={"2rem"}
            color={mode.mode == "dark" ? "white" : "black"}
          />
        </a>
        <div className="hidden sm:visble sm:flex justify-center space-x-10 min-sm:hidden">
          <a href="#">
            <GoHome
              size={"2rem"}
              color={mode.mode == "dark" ? "white" : "black"}
            />
          </a>
          <a href="#">
            <IoSearch
              size={"2rem"}
              color={mode.mode == "dark" ? "white" : "black"}
            />
          </a>
          <a href="#">
            <IoCreateOutline
              size={"2rem"}
              color={mode.mode == "dark" ? "white" : "black"}
            />
          </a>
          <a href="#">
            <GoHeart
              size={"2rem"}
              color={mode.mode == "dark" ? "white" : "black"}
            />
          </a>
          <a href="#">
            <FaRegUser
              size={"2rem"}
              color={mode.mode == "dark" ? "white" : "black"}
            />
          </a>
        </div>
        <a href="#" className=" sm:w-10 ">
          <PiList
            size={"2rem"}
            color={mode.mode == "dark" ? "white" : "black"}
          />
        </a>

        {/* <a href="#">Log in</a>
      <a href="#">Sign up</a> */}
      </div>
    </>
  );
};

export default Navbar;
