import React from "react";
import "../components/HighlightsChef.css";

interface HighlightsChefProps {
  January: string;
  May: string;
  September: string;
  November: string;
  August: string;
  December: string;
  Highlight1: string;
  Highlight2: string;
  Highlight3: string;
  Highlight4: string;
  Highlight5: string;
  Highlight6: string;
  Highlight7: string;
  Highlight8: string;
  Highlight9: string;
  Highlight10: string;
  Highlight11: string;
  Highlight12: string;
  Highlight13: string;
  Highlight14: string;
}

const HighlightsChef: React.FC<HighlightsChefProps> = ({
  January,
  Highlight1,
  Highlight2,
  Highlight3,
  Highlight4,
  Highlight5,
  Highlight6,
  Highlight7,
  Highlight8,
  Highlight9,
  Highlight10,
  Highlight11,
  Highlight12,
  Highlight13,
  Highlight14,
  May,
  September,
  November,
  August,
  December,
}) => {
  return (
    <section id="highlightsChefContainer">
      <div id="year2024">
        <h1 className="Year">2024</h1>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{January}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/japan_flag.svg" alt="Japan Flag" />
          </div>
          <div className="HighlightsText">
            <a>{Highlight1}</a>
          </div>
        </div>
      </div>
      <div id="year2023">
        <h1 className="Year">2023</h1>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{January}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/spain_flag.svg" alt="Spain Flag" />
          </div>
          <div className="HighlightsText">
            <a>{Highlight2}</a>
          </div>
        </div>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{May}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/arabia_flag.svg" alt="Arabia Flag" />
          </div>
          <div className="HighlightsText">
            <a>{Highlight3}</a>
          </div>
        </div>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{September}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/singapore_flag.svg" alt="Singapore Flag" />
          </div>
          <div className="HighlightsText">
            <a>{Highlight4}</a>
          </div>
        </div>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{November}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/turkey_flag.svg" alt="Turkey Flag" />
          </div>
          <div className="HighlightsText">
            <a>{Highlight5}</a>
          </div>
        </div>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{November}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/uzbekistan_flag.svg" alt="Uzbekistan Flag" />
          </div>
          <div className="HighlightsText">
            <a>{Highlight6}</a>
          </div>
        </div>
      </div>
      <div id="year2022">
        <h1 className="Year">2022</h1>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{August}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/japan_flag.svg" alt="Japan Flag" />
          </div>
          <div className="HighlightsText">
            <a>{Highlight7}</a>
          </div>
        </div>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{September}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/italy_flag.svg" alt="Italy Flag" />
          </div>
          <div className="HighlightsText">
            <a>{Highlight8}</a>
          </div>
        </div>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{November}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/australia_flag.svg" alt="Australia Flag" />
          </div>
          <div className="HighlightsText">
            <a>{Highlight9}</a>
          </div>
        </div>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{December}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/arabia_flag.svg" alt="Arabia Flag" />
          </div>
          <div className="HighlightsText">
            <a>{Highlight10}</a>
          </div>
        </div>
      </div>
      <div id="year2021">
        <h1 className="Year">2021</h1>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{November}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/japan_flag.svg" alt="Japan Flag" />
          </div>
          <div className="HighlightsText">
            <a>{Highlight11}</a>
          </div>
        </div>
      </div>
      <div id="year2020">
        <h1 className="Year">2020</h1>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{January}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/us_flag.svg" alt="US Flag" />
          </div>
          <div className="HighlightsText">
            <a>{Highlight12}</a>
          </div>
        </div>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{January}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/us_flag.svg" alt="US Flag" />
          </div>
          <div className="HighlightsText">
            <a>{Highlight13}</a>
          </div>
        </div>
        <div className="HighlightsInformation">
          <div className="Month">
            <a>{November}</a>
          </div>
          <div className="CountryImage">
            <img src="../../public/japan_flag.svg" alt="Japan Flag" />
          </div>
          <div className="HighlightsText">
            <a>{Highlight14}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsChef;