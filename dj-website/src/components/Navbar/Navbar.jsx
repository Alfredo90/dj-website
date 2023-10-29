import Kmstry from "../../assets/kmstry.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center  px-6 py-2 ">
      <Link to="/">
        <img src={Kmstry} alt="logo" />
      </Link>
      {/* <h1 className="text-2xl font-pacifico">KMSTRY</h1> */}
      <ul className="flex flex-row  gap-10 text-md  ">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="about">
          <li>About</li>
        </Link>
        <Link to="mixes">
          <li>Mixes</li>
        </Link>
        <Link to="contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
