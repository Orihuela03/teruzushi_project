import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";

interface HeaderProps {
  title1: string;
  title2: string;
}

const Header: React.FC<HeaderProps> = ({ title1, title2 }) => {
  return (
    <header>
      <section>
        <ul id="textSection">
          <li>
            <a href="/Ubication">{title1}</a>
          </li>
          <li>
            <a href="#">{title2}</a>
          </li>
        </ul>
      </section>
      <section>
        <Link to="/">
          <img id="logoImage" src="../../public/h_logo.svg" alt="Logo Teruzushi" />
        </Link>
      </section>
    </header>
  );
};

export default Header;
