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
      <div className="titleContainer">
        <h1 className="text1">{title2}</h1>
      </div>
      <MostRequestDishes firstDishTitle="" firstDishText="" secondDishTitle="" secondDishText="" ThirdDishTitle="" ThirdDishText=""/>
      <Footer />
    </>
  );
};
export default ReservePage;
