const Button = (props) => {
  console.log("button", props);
  return <button style={{ backgroundColor: props.color }}>{props.name}</button>;
};

export default Button;
