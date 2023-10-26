import MainPage from "../components/MainPage/MainPage";
import Navbar from "../components/Navbar/Navbar";

const App = () => {
  return (
    <div className=" w-screen h-screen  bg-black text-white   ">
      <Navbar />
      <MainPage />
    </div>
  );
};

export default App;
