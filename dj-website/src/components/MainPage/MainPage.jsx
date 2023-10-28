import { Fade, Slide } from "react-awesome-reveal";

import instagram from "../../assets/instagram.svg";
import logoName from "../../assets/logoName.svg";
import soundCloud from "../../assets/soundCloudIcon.svg";
import tikTok from "../../assets/tiktok.svg";

const MainPage = () => {
  return (
    <Slide direction="left" duration={1400} triggerOnce>
      <main className="flex flex-row justify-center items-center h-screen ">
        <div className=" flex flex-col justify-center items-center   ">
          <img className=" w-full h-32   " src={logoName} alt="" />
          <Fade delay={1e3} cascade damping={1e-1} triggerOnce>
            <p className="mt-4">( keh · muh · stree )</p>
            <div className="flex flex-row justify-center items-center gap-20 mt-4  ">
              <a href="https://soundcloud.com/user-236976425">
                <img className=" h-16 " src={soundCloud} alt="soundcloud" />
              </a>
              <a href="">
                <img className=" h-10 " src={instagram} alt="instagram" />
              </a>
              <a href="">
                <img className=" h-12 " src={tikTok} alt="tiktok" />
              </a>
            </div>
          </Fade>
        </div>
      </main>
    </Slide>
  );
};

export default MainPage;
