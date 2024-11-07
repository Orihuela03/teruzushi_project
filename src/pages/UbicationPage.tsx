import Header from "../components/Header";
import Footer from "../components/Footer";
import "./UbicationPage.css";
import UbicationRestaurant from "../components/UbicationRestaurant";

interface UbicationPageProps {
  title: string;
}

const UbicationPage: React.FC<UbicationPageProps> = ({ title }) => {
  return (
    <>
      <Header title1="Ubication" title2="About of the chef" />
      <div id="titleContainer">
        <h1>{title}</h1>
      </div>
      <UbicationRestaurant
        title1="Teruzushi"
        subtitle1="Food entertainment unfolds. Third generation Teru Sushi, who has been making sushi all over the world and proposing the joy of food to people, will now deliver the best sushi at the theater-style counter. Please enjoy your time filled with laughter and excitement to your heart's content. The restaurant is located in Fukuoka prefecture, in the city of Kitakyushu, in the Tobata district, in the Sugawara neighborhood."
        buttonContent="GO TO MAPS"
      />
      <Footer />
    </>
  );
};
export default UbicationPage;
