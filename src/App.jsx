import React from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Body from "./Body";
import { currencies } from "./constants";

function App() {
  console.log("App");

  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
}

export default App;
