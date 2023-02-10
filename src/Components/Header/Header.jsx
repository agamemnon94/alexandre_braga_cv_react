import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  console.log(props);
  const handleClick = () => {
    // section2Ref.scrollIntoView({ behavior: "smooth" });
  };

  // const toggleNavBar = () => {};
  return (
    <header>
      <div className="header_container">
        <p className="header_name" id="alexandre">
          Alexandre Braga
        </p>
        <nav className="nav_container">
          <ul className="header_list">
            <li className="item_accueil">
              <NavLink to="/" className="header_a" id="accueil">
                Accueil
              </NavLink>
            </li>
            <li className="item_accueil">
              <NavLink to="/About" className="header_a" id="propos">
                À propos
              </NavLink>
            </li>
            <li className="item_accueil">
              <NavLink
                to="/About#section_about2"
                onClick={handleClick}
                className="header_a"
                id="projet"
              >
                Projets{" "}
              </NavLink>
            </li>
          </ul>
          <button className="nightbtn" id="nightbtn" type="button">
            {" "}
            <img
              className="moon"
              src="./src/assets/icons/Black_Moon.png"
              alt="icon black moon"
            />
            <img
              className="sun"
              src="./src/assets/icons/white_Sun.png"
              alt="icon white sun"
            />
          </button>
        </nav>
      </div>

      <div className="container__burger btn__toggle__container">
        <div className="cont-lignes btn1">
          <div className="lignes" id="ligne1">
            <div className="lignes" id="ligne2"></div>
            <div className="lignes" id="ligne3"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
