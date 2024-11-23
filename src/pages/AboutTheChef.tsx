import Header from "../components/Header";
import ChefInformation from "../components/ChefInformation";
import Footer from "../components/Footer";
import HighlightsChef from "../components/HighlightsChef";
import "./AboutTheChef.css";

interface AboutTheChefProps {
  title: string;
  subtitle: string;
}

const AboutTheChef: React.FC<AboutTheChefProps> = ({ title, subtitle }) => {
  return (
    <>
      <Header title1="Ubication" title2="About the chef" />
      <div className="titleContainer">
        <h1 className="text1">{title}</h1>
      </div>
      <ChefInformation
        title="Takayoshi Watanabe"
        subtitle="Takayoshi Watanabe is the owner of the famous restaurant Teruzushi, a well-recognized establishment known for its high-quality sushi and welcoming atmosphere. Located in a popular area, Teruzushi has earned an excellent reputation among both locals and tourists. Watanabe, who comes from a long family tradition of restaurateurs, has dedicated his life to perfecting the art of sushi. From a young age, he worked in various sushi restaurants in Japan, where he acquired techniques and knowledge that he later applied to his own business. His philosophy focuses onthe freshness of the ingredients and attention to detail, which is reflected in every dish he serves. Under his leadership, Teruzushi has not only stood out for its food but also for its exceptional service. Watanabe and his team strive to provide a memorable experience for each customer, combining traditional Japanese culinary practices with a modern approach. Thanks to his dedication and passion, Teruzushi has received numerous accolades and awards in the culinary community, establishing itself as a must-visit destination for sushi lovers."
      />
      <div className="titleContainer">
        <h1 className="text1">{subtitle}</h1>
      </div>
      <HighlightsChef
        January="January"
        Highlight1="Kindai University featured in front-page newspaper advertisement."
        Highlight2="Attended Madrid Fusion in Spain and appeared as a speaker."
        May="May"
        Highlight3="TERUZUSHI Riyadh opened in Saudi Arabia."
        September="September"
        Highlight4="Invited as F1 Singapore GP executive sushi chef."
        November="November"
        Highlight5="Attended the Turkish Culinary Institute Gastromasa as a speaker."
        Highlight6="Serving sushi to the president of the country and his family."
        August="August"
        Highlight7="Opened Teruzushi TOKYO in Akasaka, Tokyo."
        Highlight8="Served as EX sushi chef at Milan Collection Moncler 70th anniversary event."
        Highlight9="Pop-up in Sydney, Australia."
        December="December"
        Highlight10="Riyadh season 2 week pop-up due to offer from Saudi Arabian government."
        Highlight11="Appeared on TV Asahi's I brought Mr. Rare."
        Highlight12="Mastercard NY Times front page ad."
        Highlight13="Invited to the Grammy Awards and walked the red carpet."
        Highlight14="Ministry of Agriculture, Forestry and Fisheries Culinary Masters Award."
      />
      <Footer />
    </>
  );
};
export default AboutTheChef;