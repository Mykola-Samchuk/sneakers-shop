import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import CardItem from "./components/CardItem/CardItem";
function App() {
  return (
    <div className="wrapper">
      
      <Header />
      <div className="content">
        <div className="item-wrapp">
          <h1 className="fw-700">Всі кросівки</h1>
          <div className="search-wrapp">
            <input  placeholder="Пошук..." type="search" />
          </div>
        </div>

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
