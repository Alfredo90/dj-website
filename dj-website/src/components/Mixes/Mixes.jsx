import Kmstry from "../../assets/kmstry.svg";
import React from "react";
import ReactPlayer from "react-player";

const Mixes = () => {
  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen ">
      <ReactPlayer
        width="600px"
        // playIcon
        // light={<img src={Kmstry} />}
        url="https://soundcloud.com/user-236976425/tracks"
      />
    </div>
  );
};

export default Mixes;
