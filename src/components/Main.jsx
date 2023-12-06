import Button from "./Button";
// I can store a helper function in a different file and import the function into this file to use in my component
import { getAverage } from "../helpers/helper";

// I can create a helper function to show calculations in my JSX
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

      {/* I can reuse the Button component but pass it different values as props. The word before the equals is the key and the part in the curly braces represents the value */}
      <Button name={"Submit"} color={"green"} />
      <Button name={"Cancel"} color={"red"} />
      <Button name={"Pay Now"} color={"orange"} />
      <ul></ul>
    </main>
  );
}

export default Main;
