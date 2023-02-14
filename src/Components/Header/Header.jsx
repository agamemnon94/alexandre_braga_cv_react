import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header({ section2Ref }) {
  const [ButtonState, setButtonState] = useState(false);
  const [bodyState, setBodyState] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let body = window.document.body;
  let toggledButton;

  const handleClick = () => {
    section2Ref.current.scrollIntoView({ behavior: "smooth" });
    // console.log(section2Ref);
  };

  useEffect(() => {
    let lastScrollTop = 0;

    const toggleNavBar = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > lastScrollTop) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      lastScrollTop = scrollTop;
    };
    window.addEventListener("scroll", toggleNavBar);
  }, []);

  const toggleBtnFunction = () => {
    // console.log(ButtonState);
    setButtonState(!ButtonState);
    setBodyState(!bodyState);
    // console.log(bodyState);
  };

  if (ButtonState) {
    toggledButton = (
      <img
        className="sun"
        src={"./src/assets/icons/white_sun.png"}
        alt="icon white sun"
      />
    );
  } else {
    toggledButton = (
      <img
        className="moon"
        src={"./src/assets/icons/Black_Moon.png"}
        alt="icon black moon"
      />
    );
  }
  if (bodyState) {
    body.className = "body_night";
  } else {
    body.className = "";
  }
  return (
    <header>
      <div className={scrolled ? "header_hidden" : "header_container"}>
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
          {/* <button className="nightbtn" id="nightbtn" type="button">
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
          </button> */}
          <button onClick={toggleBtnFunction} className="nightbtn">
            {toggledButton}
          </button>
          {/* <button onClick={toggleBtnFunction} className="nightbtn">
            {ButtonState ? (
              <img
                className="sun"
                src={"./src/assets/icons/white_sun.png"}
                alt="icon white sun"
              />
            ) : (
              <img
                className="moon"
                src={"./src/assets/icons/Black_Moon.png"}
                alt="icon black moon"
              />
            )}
          </button> */}
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
