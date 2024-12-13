import React from "react";
import "./Reserve.css";

interface ReserveProps {
  title: string;
  subtitle: string;
  buttonContent: string;
}

const Reserve: React.FC<ReserveProps> = ({
  title,
  subtitle,
  buttonContent,
}) => {
  return (
    <div id="reserveContainer">
      <section id="redSquare">
        <img id="logoRedSquare" src="../../public/logo.svg" alt="logo Teruzushi" />
      </section>
      <section id="reserveSection">
        <div id="textContainer">
          <h1 id="text3">{title}</h1>
          <a id="subtext2">{subtitle}</a>
        </div>
        <button>
          <a href="/Reserve">{buttonContent}</a>
        </button>
      </section>
    </div>
  );
};

export default Reserve;
