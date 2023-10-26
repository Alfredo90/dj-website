import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center  p-4 ">
      <h1>Logo</h1>
      <ul className="flex  flex-row gap-20">
        <li>Home</li>
        <li>About</li>
        <li>Social Media</li>
      </ul>
    </nav>
  );
};

export default Navbar;
