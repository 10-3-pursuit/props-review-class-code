import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

// this name dogs is a variable
import dogs from "./data.js";

import "./App.css";

const todaysDate = new Date().toDateString();
const dayCareName = "Bark and Bowl Doggy Day Care";

import { getAverage } from "./helpers/helper";

function App() {
  return (
    <div className="App">
      <Header city={"Peekskill"} name={"Bark and Bowl Doggy Day Care"} />
      <Header city={"Manhattan"} name={"Kitty Kat Cat Care"} />

      <Aside date={todaysDate} dogs={dogs} />
      <Main getAverage={getAverage} dogs={dogs} />
    </div>
  );
}

export default App;
