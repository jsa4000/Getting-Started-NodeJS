import React, { useContext } from "react";
import "./index.css";
import Header from "../../components/Header";
import Home from "../Home";
import About from "../About";
import Contacts from "../Contacts";
import { PageContext } from "../../contexts/PageContext";

const Main = () => {
  const { index } = useContext(PageContext);

  const getPage = () => {
    switch (index) {
      case "default":
      case "home":
        console.log(index);
        return <Home />;
      case "contacts":
        console.log(index);
        return <Contacts />;
      case "about":
        console.log(index);
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="Main">
      <Header />
      {getPage()}
    </div>
  );
};

export default Main;
