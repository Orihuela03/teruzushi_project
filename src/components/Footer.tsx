import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
 <footer>
    <section>
        <ul id="socialSection">
            <li id="facebookLogo"><img src="../../public/facebook_logo.svg"/></li>
            <li id="xLogo"><img src="../../public/x_logo.svg"/></li>
            <li id="instagramLogo"><img src="../../public/instagram_logo.svg"/></li>
            <li id="tiktokLogo"><img src="../../public/tiktok_logo.svg"/></li>
        </ul>
    </section>
 </footer>
  );
};

export default Footer;
