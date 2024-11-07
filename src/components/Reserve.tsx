import React from "react";
import "./Reserve.css";

interface ReserveProps {
  title: string;
  subtitle: string;
  buttonContent: string;
}

const Reserve: React.FC<ReserveProps> = ({ title, subtitle, buttonContent }) => {
  return (
    <div id="reserveContainer">
      <section id="redSquare">
        <img id="logoRedSquare" src="../../public/logo.svg" />
      </section>
      <section id="reserveSection">
        <div id="textContainer">
          <h1>{title}</h1>
          <a>{subtitle}</a>
        </div>
        <button>
          <a href="#">{buttonContent}</a>
        </button>
      </section>
    </div>
  );
};

export default Reserve;
