import React from "react";
import "./KniveShop.css";

interface kniveShopProps {
  title: string;
  subtitle: string;
  buttonContent: string;
}

const KniveShop: React.FC<kniveShopProps> = ({
  title,
  subtitle,
  buttonContent,
}) => {
  return (
    <div id="shopContainer">
      <section id="imageContainer">
        <img id="imageShop" src="../../public/image_shop.svg" alt="knive store image"/>
      </section>
      <section id="buttonContainer">
        <div id="textContainer">
          <h1 id="text2">{title}</h1>
          <a id="subtext1">{subtitle}</a>
        </div>
        <button>
          <a href="https://teruknives.com">{buttonContent}</a>
        </button>
      </section>
      <section id="logoContainer">
        <img id="logoShop" src="../../public/logo_shop.svg" alt="knive store logo" />
      </section>
    </div>
  );
};

export default KniveShop;