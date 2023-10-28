import { Fade, Slide } from "react-awesome-reveal";

import instagram from "../../assets/instagram.svg";
import logoName from '../../assets/logoName.svg'
import soundCloud from "../../assets/soundCloudIcon.svg";
import tikTok from "../../assets/tiktok.svg";

const MainPage = () => {
  return (
    <main className="flex flex-row justify-center items-center h-screen ">
      <Slide   >
        <div className=" flex flex-col justify-center items-center   ">
          <img className=" w-full h-32   " src={logoName} alt="" />
          <Fade delay={1e3} cascade damping={1e-1}>
            <p className="mt-4">( keh · muh · stree )</p>
            <div className="flex flex-row justify-center items-center gap-20 mt-4  ">
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
          </Fade>
        </div>
      </Slide>
    </main >
  );
};


export default MainPage;
