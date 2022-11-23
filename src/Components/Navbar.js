import React, { useState } from "react";
import Nham from "../Assets/narutoBurger.svg";
import NSign from "../Assets/Nsign.svg";
import Hham from "../Assets/hinataBurger.svg";

const Navbar = () => {
  let [nav, setNav] = useState(false);
  const navbarItem = [
    {
      id: 1,
      name: "Story",
    },
    {
      id: 2,
      name: "Saske",
    },
    {
      id: 3,
      name: "Hinata",
    },
    {
      id: 4,
      name: "Jiraya",
    },
    {
      id: 5,
      name: "Other",
      style: "border-none",
    },
  ];
  return (
    <div className="flex justify-between p-4 items-center bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="flex flex-row">
        <div className="text-2xl md:text-3xl  lg:text-6xl  mr-2 ">
          NARUTO
        </div>
        <img src={NSign} alt="" className="" />
      </div>
      <div className="">
        <ul className="hidden md:flex">
          {navbarItem.map(({ id, name }) => (
            <li className="p-4 hover:text-yellow-400 cursor-pointer transition-all duration-300">{name}</li>
          ))}
        </ul>
      </div>
      <div onClick={() => setNav(!nav)} className="md:hidden">
        {!nav ? (
          <img src={Hham} className="h-[4vh]" alt="OpeningMenu" />
        ) : (
          <img src={Nham} className="h-[4vh]" alt="ClosingMenu" />
        )}
      </div>

      <ul
        className={
          nav
            ? `flex flex-col absolute top-14 left-0 items-center justify-center w-full h-screen bg-gradient-to-b from-yellow-50 to bg-yellow-600 transition-all duration-200 ease-in-out font-semibold  `
            : `fixed left-[-300px]`
        }
      >
        {navbarItem.map(({ id, name, style }) => (
          <li
            key={id}
            className={`p-4 border-b-2 border-gray-600 w-full text-center ${style} hover:cursor-pointer hover:text-yellow-800 transition-all duration-150`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
