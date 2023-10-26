import instagram from "../../assets/instagram.svg";
import soundCloud from "../../assets/soundCloudIcon.svg";
import tikTok from "../../assets/tiktok.svg";

const MainPage = () => {
  return (
    <main className="flex flex-row justify-center items-center   h-screen ">
      <div className=" flex flex-col justify-center items-center border-1 shadow-2xl rounded-xl shadow-[#00D1CD]  h-5/6  w-5/6 ">
        <h1 className=" text-8xl font-pacifico text-[#F30067] ">KMSTRY</h1>
        <p className="text-[#EAEAEA] mt-4">( keh · muh · stree )</p>

        <div className="flex flex-row justify-center items-center gap-20 pt-4 ">
          <a href="">
            <img className=" h-16 " src={soundCloud} alt="soundcloud" />
          </a>
          <a href="">
            <img className=" h-10 " src={instagram} alt="instagram" />
          </a>
          <a href="">
            <img className=" h-12 " src={tikTok} alt="tiktok" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
