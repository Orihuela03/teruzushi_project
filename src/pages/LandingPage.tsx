import Header from "../components/Header";
import Video from "../components/Video";
import Reserve from "../components/Reserve";
import KniveShop from "../components/KniveShop";
import Footer from "../components/Footer";

function LandingPage() {
    return (
      <>
        <Header title1="Ubication" title2="About the chef"/>
        <Video />
        <Reserve title='Reservation' subtitle='To make the reservation you will be redirected to the page www.tableall.com.' buttonContent='GO TO RESERVE' />
        <KniveShop title='Teruknives' subtitle='Teruzushi Official Japanese Knife Store' buttonContent='GO TO SHOP' />
        <Footer />
      </>
    );
  }
  export default LandingPage;