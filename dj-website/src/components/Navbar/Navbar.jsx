import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center py-4 px-6  text-[#EAEAEA]">
      <h1 className="text-2xl font-pacifico text-[#F30067] ">KMSTRY</h1>
      <ul className="flex flex-row  gap-10 text-lg  ">
        <li>Home</li>
        <li>About</li>
        <li>Social Media</li>
      </ul>
    </nav>
  );
};

export default Navbar;
