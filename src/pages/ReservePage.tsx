import "./ReservePage.css";
import React from "react";
import Header from "../components/Header";
import MostRequestDishes from "../components/MostRequestDishes";
import Footer from "../components/Footer";

interface ReservePageProps {
  title1: string;
  title2: string;
}

const ReservePage: React.FC<ReservePageProps> = ({ title1, title2 }) => {
  return (
    <>
      <Header title1="Ubication" title2="About The Chef" />
      <div className="titleContainer">
        <h1 className="text1">{title1}</h1>
      </div>
      <div id="titleContainer">
        <h1 className="text1">{title2}</h1>
      </div>
      <MostRequestDishes
        firstDishTitle="Natural eel"
        firstDishText="Natural eel purchased from fishermen on the Ekidategawa River in Oita Prefecture is slowly roasted over bincho charcoal, then coated in sushi rice and topped with seaweed."
        secondDishTitle="Tiger prawns"
        secondDishText="The tiger prawns from Himeshima are extra large, measuring 20 centimeters in size. The flesh has been boiled to bring out its sweetness, and when you bite into it, it has a rich texture, followed by the sweetness of the prawns."
        ThirdDishTitle="Red shelfish"
        ThirdDishText="The red shellfish, which is three to four times the size of a typical red shellfish, comes from the Buzen Sea. It is said that the size and taste of this fruit are on a whole other level because it grows in coastal areas along mountains that are rich in nutrients."
      />
      <Footer />
    </>
  );
};
export default ReservePage;
