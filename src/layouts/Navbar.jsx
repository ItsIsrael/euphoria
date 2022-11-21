import React from "react";
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import logoWithText from "../images/EUPHORIA+LOGO.png";
import Menu from "./Menu";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function MenuNav() {
  const [isOpen, setOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <>
      <div className="navbar">
        <Link className="logo-container"to="/">
          <img src={logoWithText} alt="Euphoria-logo" className="logo" />
        </Link>
        <ul className={` navbar-links ${isOpen ? "show" : ""}`}>
          {/* Show navbar menu, le pasamos una prop para controlar
          el comportamiento del menu */}
          <Menu setOpen={setOpen} />
        </ul>
        {/*<--------- HAMBURGER MENU --------->*/}
        <div className="burger-button">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            duration={0.2}
            easing="ease-in"
            rounded
          />
        </div>
      </div>
    </>
  );
}
