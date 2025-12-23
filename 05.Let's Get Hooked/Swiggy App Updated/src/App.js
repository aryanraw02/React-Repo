import React from "react";
import ReactDOM from "react-dom/client";
// Named import
import { Header } from "./Components/Header";
import Body from "./Components/Body";
import RestaurantCard from "./Components/RestaurantCard";

// not using keys (not best practice) <<<<<< index as key  <<<<<<<<<<< unique id as key (best practice)

const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
