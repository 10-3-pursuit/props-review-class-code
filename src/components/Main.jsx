import Button from "./Button";
import { getAverage } from "../helpers/helper";

// const getAverage = (dogArray) => {
//   let sum = 0;
//   for (let dog of dogArray) {
//     sum += parseInt(dog.grade);
//   }
//   return (sum / dogArray.length).toFixed(2);
// };

function Main(props) {
  const average = getAverage(props.dogs);
  return (
    <main>
      <h2>Class Average: {average}</h2>
      <h3>Notable performances and grades:</h3>

      <Button name={"Submit"} color={"green"} />
      <Button name={"Cancel"} color={"red"} />
      <Button name={"Pay Now"} color={"orange"} />
      <ul></ul>
    </main>
  );
}

export default Main;
