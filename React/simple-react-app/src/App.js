import React from "react";
import "./App.css";
import SideBar from "./SideBar.js";
import Chat from "./Chat.js";
import List from "./List.js";

const Header = () => {
  return (
    <div className="Header">
      <div>
        <img src="logo192.png" alt="" width="50px" height="100%50px" />
      </div>
      <div>Header</div>
      <div>About</div>
    </div>
  );
};

const MainPage = () => {
  return (
    <div className="MainPage">
      <h1>MainPage</h1>
      <List />
      <div className="Space" />
      <Chat />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <SideBar />
        <MainPage />
      </div>
    </div>
  );
};

export default App;
