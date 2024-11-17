import "../components/ChefInformation.css";
import React from "react";

interface ChefInformationProps {
  title: string;
  subtitle: string;
}

const ChefInformation: React.FC<ChefInformationProps> = ({
  title,
  subtitle,
}) => {
  return (
    <section id="containerChefInforamtion">
      <div id="informationAboutTheChef">
        <div id="greySquare">
          <div id="containerText">
            <h1>{title}</h1>
            <a>{subtitle}</a>
          </div>
        </div>
        <div id="imageSquare">
          <img src="../../public/happy_chef.svg" />
          <img src="../../public/chef_photo.svg" />
        </div>
      </div>
    </section>
  );
};

export default ChefInformation;
