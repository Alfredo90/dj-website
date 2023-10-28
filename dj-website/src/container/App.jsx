import About from "../components/About/About";
import MainPage from "../components/MainPage/MainPage";
import Navbar from "../components/Navbar/Navbar";

const App = () => {
  return (
    // <div className="  bg-black text-white border-2 border-[#00D1CD]   h-full  w-full  ">
    <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#444444] via-gray-100 to-[black] h-full w-full text-[#CCCCCC] border-[#54ECC4] border-2">
      <Navbar />
      <MainPage />
      <About />
    </div>
  );
};

export default App;
