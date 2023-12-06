import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

// I import the dog data in App.jsx so that I may pass it to several different components. This is better than importing the data into each component
import dogs from "./data.js";

// i import my css using a relative path
import "./App.css";

// I can pass variables as props as well. I did not do this yet but it is possible
const todaysDate = new Date().toDateString();
const dayCareName = "Bark and Bowl Doggy Day Care";

function App() {
  // to create a prop for the header component
  // i create a key called name inside the Header component below
  // i give it a value of the string
  // i create a key called city inside the Header component below
  // i pass the different values for the keys in each Header component
  // the value will be stored in the props argument of the Header function (component)

  return (
    <div className="App">
      {/* I can reuse the Header Component but pass it different values as props */}
      <Header city={"Peekskill"} name={"Bark and Bowl Doggy Day Care"} />
      <Header city={"Manhattan"} name={"Kitty Kat Cat Care"} />
      {/* I can pass the same props to two different components */}
      <Aside dogs={dogs} />
      <Main dogs={dogs} />
    </div>
  );
}

export default App;
