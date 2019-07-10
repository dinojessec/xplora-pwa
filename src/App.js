import React from "react";

import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Suggestions from "./components/Suggestions";
import Content from "./components/Content";
import Footer from "./components/Footer";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Suggestions />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
