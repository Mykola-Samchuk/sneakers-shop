import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import CardItem from "./components/CardItem/CardItem";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <h1 className="fw-700 title-mb-40">All Sneakers</h1>
        <div className="card-wrapp">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
        <div className="spacer-sm"></div>
      </div>
    </div>
  );
}

export default App;
