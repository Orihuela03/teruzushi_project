import React from "react";
import "./Video.css";

const Video: React.FC = () => {
  return (
    <div id="videoContainer">
      <section id="videoCard">
        <video src="../../public/TERUZUSHI.mp4" autoPlay loop muted />
      </section>

      <section>
        <img id="logoVideo" src="../../public/logo-main.svg" />
      </section>
    </div>
  );
};

export default Video;