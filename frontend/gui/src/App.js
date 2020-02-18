import React from "react";
import Main from "./components/mainPage";
import { BaseRouter } from "./router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <BaseRouter />
    </Router>
  );
}

export default App;
