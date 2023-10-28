import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center py-4 px-6 ">
      <h1 className="text-2xl font-pacifico">KMSTRY</h1>
      <ul className="flex flex-row  gap-10 text-lg  ">
        <li>Home</li>
        <li>About</li>
        <li>Mixes</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
