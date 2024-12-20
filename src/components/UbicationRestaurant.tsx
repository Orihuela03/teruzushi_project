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
  subtitle3,
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
              <a href="https://maps.app.goo.gl/E6q7VTS41cXgbzSF7">
                {buttonContent}
              </a>
            </button>
          </div>
        </div>
        <div className="image-container">
          <img src="../../public/teruzushi_restaurant.svg" alt="Restaurant Teruzushi image"/>
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
              <a href="https://maps.app.goo.gl/GeEj5Z3xCjSbeEyPA">
                {buttonContent}
              </a>
            </button>
          </div>
        </div>
        <div className="image-container">
          <img src="../../public/teruzushiJP_restaurant.svg" alt="Restaurant TeruzushiJP Image"/>
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
              <a href="https://maps.app.goo.gl/YQKXmDJ9pY8B3u5f8">
                {buttonContent}
              </a>
            </button>
          </div>
        </div>
        <div className="image-container">
          <img src="../../public/teruzushiriyadh_restaurant.svg" alt="Restaurant TeruzushiRiyadh Image" />
        </div>
      </section>
    </div>
  );
};

export default UbicationRestaurant;