import React from "react";
import Jumbotron from "../contents/Jumbotron";
import Suggestion from "../contents/Suggestions";
import Content from "../contents/Content";

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <Suggestion />
      <Content />
    </div>
  );
};

export default Home;
