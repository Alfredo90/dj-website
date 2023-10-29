import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import MainPage from "../components/MainPage/MainPage";
import Mixes from "../components/Mixes/Mixes";
import Navbar from "../components/Navbar/Navbar";

const App = () => {
  // border-[#54ECC4]
  return (
    <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#444444] via-gray-100 to-[black] h-full w-full text-[#CCCCCC] ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="mixes" element={<Mixes />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
