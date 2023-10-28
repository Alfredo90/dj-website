import Kmstry from '../../assets/kmstry.svg'
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center  px-6 py-2 ">
      <img src={Kmstry} alt="logo" />
      {/* <h1 className="text-2xl font-pacifico">KMSTRY</h1> */}
      <ul className="flex flex-row  gap-10 text-md  ">
        <li>Home</li>
        <li>About</li>
        <li>Mixes</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
