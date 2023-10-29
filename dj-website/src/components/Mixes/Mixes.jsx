import Kmstry from "../../assets/kmstry.svg";
import React from "react";
import ReactPlayer from "react-player";

const Mixes = () => {
  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen ">
      <div className="border-2 rounded-lg shadow-lg shadow-[#54ECC4]">
        <ReactPlayer
          width="640px"
          height="640px"
          // playIcon
          // light={<img src={Kmstry} />}
          url="https://soundcloud.com/user-236976425/tracks"
        />
      </div>
    </div>
  );
};

export default Mixes;
