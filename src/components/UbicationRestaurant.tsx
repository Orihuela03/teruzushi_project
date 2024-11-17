import React from "react";
import "./UbicationRestaurant.css";

interface UbicationRestaurantProps {
  title1: string;
  subtitle1: string;
  buttonContent: string;
  title2: string;
  subtitle2: string;
  title3: string;
  subtitle3: string;
}

const UbicationRestaurant: React.FC<UbicationRestaurantProps> = ({
  title1,
  subtitle1,
  buttonContent,
  title2,
  subtitle2,
  title3,
  subtitle3
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
        <div className="image-container">
          <img src="../../public/teruzushi_restaurant.svg" />
        </div>
      </section>
      <section id="teruzushiJP">
        <div className="restaurant_container">
          <div className="restaurant_text">
            <h1>{title2}</h1>
            <a>{subtitle2}</a>
          </div>
          <div className="button_container">
            <button>
              <a href="#">{buttonContent}</a>
            </button>
          </div>
        </div>
        <div className="image-container">
          <img src="../../public/teruzushiJP_restaurant.svg" />
        </div>
      </section>
      <section id="teruzushiRiyadh">
        <div className="restaurant_container">
          <div className="restaurant_text">
            <h1>{title3}</h1>
            <a>{subtitle3}</a>
          </div>
          <div className="button_container">
            <button>
              <a href="#">{buttonContent}</a>
            </button>
          </div>
        </div>
        <div className="image-container">
          <img src="../../public/teruzushiriyadh_restaurant.svg" />
        </div>
      </section>
    </div>
  );
};

export default UbicationRestaurant;
