import React from "react";
import Jumbotron from "../contents/Jumbotron";
import Suggestion from "../contents/Suggestions";
import Content from "../contents/Content";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <Suggestion />
      <Content />
    </div>
  );
}
