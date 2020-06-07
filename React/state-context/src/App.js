import React from "react";
import "./App.css";
import Main from "./pages/Main";
import { PageProvider } from "./contexts/PageContext";

function App() {
  return (
    <div className="App">
      <PageProvider>
        <Main />
      </PageProvider>
    </div>
  );
}

export default App;
