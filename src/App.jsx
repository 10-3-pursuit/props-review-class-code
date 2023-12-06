import "./App.css";
import dogs from "./data.js";
import React from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

const todaysDate = new Date().toDateString();
const dayCareName = "Bark and Bowl Doggy Day Care";

function App() {
  // i create a key called name
  // i give it a value of the string
  // i pass this info to the Header component
  // the value will be stored in the propse argument of the Header component

  return (
    <div className="App">
      <Header city={"Peekskill"} name={"Bark and Bowl Doggy Day Care"} />
      <Header city={"Manhattan"} name={"Kitty Kat Cat Care"} />
      <Aside dogs={dogs} />
      <Main dogs={dogs} />
    </div>
  );
}

export default App;
