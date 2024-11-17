import Header from "../components/Header";
import Footer from "../components/Footer";
import "./AboutTheChef.css"

interface AboutTheChefProps {
    title: string;
}

const AboutTheChef: React.FC<AboutTheChefProps> = ({title}) => {
    return (
        <>
            <Header title1="Ubication" title2="About the chef" />
            <div className="titleContainer">
                <h1 className="text1">{title}</h1>
            </div>
            <Footer />
        </>
    );
}
export default AboutTheChef;