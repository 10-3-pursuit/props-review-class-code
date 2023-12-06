// When I log the props that are in the argument for Header, I can see the object in my Chrome Devtools

// I can use the values from the props object in my component by using the curly braces and keying into the props object for the values that I sent to this component from App.jsx

function Header(props) {
  console.log(props);

  return (
    <header>
      <h1>Title: {props.name}</h1>
      <h2>City: {props.city}</h2>
    </header>
  );
}

export default Header;
