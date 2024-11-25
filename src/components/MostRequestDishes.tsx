import React from "react";
import "./MostRequestDishes.css";

interface MostRequestDishesProps {
  firstDishText: string;
  firstDishTitle: string;
  secondDishText: string;
  secondDishTitle: string;
  ThirdDishText: string;
  ThirdDishTitle: string;
}

const MostRequestDishes: React.FC<MostRequestDishesProps> = ({
  firstDishText,
  firstDishTitle,
  secondDishText,
  secondDishTitle,
  ThirdDishText,
  ThirdDishTitle,
}) => {
  return (
    <section id="dishesContainer">
      <div id="firstDish">
        <div className="imageDishContainer">
            <img src=""/>
        </div>
        <div className="textDishContainer">
            <h1>{firstDishTitle}</h1>
            <a>{firstDishText}</a>
        </div>
      </div>
      <div id="secondDish">
        <div className="imageDishContainer">
            <img />
        </div>
        <div className="textDishContainer">
            <h1>{secondDishTitle}</h1>
            <a>{secondDishText}</a>
        </div>
      </div>
      <div id="thirdDish">
        <div className="imageDishContainer">
            <img />
        </div>
        <div className="textDishContainer">
            <h1>{ThirdDishTitle}</h1>
            <a>{ThirdDishText}</a>
        </div>
      </div>
    </section>
  );
};

export default MostRequestDishes;
