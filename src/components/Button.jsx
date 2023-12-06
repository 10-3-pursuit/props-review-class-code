// - i can create a button Component that returns a <button> element
// - i add the props keyword into the  parenthesis as the argument
// - I can then use the props that are passed to the button component in Main.jsx to change both the css and the actual text for my component

const Button = (props) => {
  console.log("button", props);
  return <button style={{ backgroundColor: props.color }}>{props.name}</button>;
};

export default Button;
