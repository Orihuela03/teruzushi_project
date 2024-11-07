import React from "react";
import "./UbicationRestaurant.css";

interface UbicationRestaurantProps {
  title1: string;
  subtitle1: string;
  buttonContent: string;
}

const UbicationRestaurant: React.FC<UbicationRestaurantProps> = ({
  title1,
  subtitle1,
  buttonContent,
}) => {
  return (
    <div id="contentContainer">
      <section id="teruzushi">
        <div className="restaurant_container">
          <div className="restaurant_text">
            <h1>{title1}</h1>
            <a>{subtitle1}</a>
          </div>
          <div className="button_container">
            <button>
              <a href="#">{buttonContent}</a>
            </button>
          </div>
        </div>
        <div id="imageContainer">
              <img src="../../public/teruzushi_restaurant.svg" />
            </div>
      </section>
      <section id="teruzushiJP">
        <div className="restaurant_text"></div>
      </section>
      <section id="teruzushiRiyadh">
        <div className="restaurant_text"></div>
      </section>
    </div>
  );
};

export default UbicationRestaurant;
