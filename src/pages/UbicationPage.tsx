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
      <Header title1="Ubication" title2="About the chef" />
      <div id="titleContainer">
        <h1 id="text4">{title}</h1>
      </div>
      <UbicationRestaurant
        title1="Teruzushi"
        subtitle1="Food entertainment unfolds. Third generation Teru Sushi, who has been making sushi all over the world and proposing the joy of food to people, will now deliver the best sushi at the theater-style counter. Please enjoy your time filled with laughter and excitement to your heart's content. The restaurant is located in Fukuoka prefecture, in the city of Kitakyushu, in the Tobata district, in the Sugawara neighborhood."
        buttonContent="GO TO MAPS"
        title2="TeruzushiJP"
        subtitle2="Enjoy the elegance of sushi and Kaga cuisine Teruzushi.jp welcomes customers with the concept of traditional Kaga cuisine and nigiri. Please enjoy the rich ingredients of the mountains and sea, as well as the dishes and sake vessels that complement your dishes. A good encounter, a good time. The restaurant is located in Tokio prefecture, in the city of Minato, in the Akasaka district, in the neighborhood with the same name."
        title3="Teruzushi Riyadh"
        subtitle3="The first sushi restaurant opened in Saudi Arabia by a Japanese. We offer the umami and hospitality o f Japanese sushi.The restaurant is located in the Via Riyadh shopping center, which is located in that city."
      />
      <Footer />
    </>
  );
};
export default UbicationPage;