import React, { useContext } from "react";
import "./index.css";
import { PageContext } from "../../contexts/PageContext";

const Header = () => {
  const { setIndex } = useContext(PageContext);

  const onHomeClick = (e) => {
    setIndex("home");
    console.log("Home Pressed");
  };

  const onContactsClick = (e) => {
    setIndex("contacts");
    console.log("Contacts Pressed");
  };

  const onAboutClick = (e) => {
    setIndex("about");
    console.log("About Pressed");
  };

  return (
    <div className="Header">
      <a href="#default" v="logo">
        React App
      </a>
      <div className="Header-right">
        <a className="active" onClick={onHomeClick} href="#home">
          Home
        </a>
        <a href="#contact" onClick={onContactsClick}>
          Contacts
        </a>
        <a href="#about" onClick={onAboutClick}>
          About
        </a>
      </div>
    </div>
  );
};

export default Header;
