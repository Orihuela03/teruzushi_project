import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <section>
        <ul id="socialSection">
          <Link to="https://www.facebook.com/p/Teruzushi-61559864859770/">
            <li id="facebookLogo">
              <img src="../../public/facebook_logo.svg" alt="Logo Facebook" />
            </li>
          </Link>
          <Link to="https://x.com/Teruzushi_">
            <li id="xLogo">
              <img src="../../public/x_logo.svg" alt="Logo X" />
            </li>
          </Link>
          <Link to="https://www.instagram.com/teruzushi/">
            <li id="instagramLogo">
              <img src="../../public/instagram_logo.svg" alt="Logo Instagram" />
            </li>
          </Link>
          <Link to="https://www.tiktok.com/@terusushi">
            <li id="tiktokLogo">
              <img src="../../public/tiktok_logo.svg" alt="Logo Tiktok" />
            </li>
          </Link>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;