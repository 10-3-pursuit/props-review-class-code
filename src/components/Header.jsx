import React from "react";

function Header(props) {
  console.log(props);

  // name
  // city

  return (
    <header>
      <h1>Title: {props.name}</h1>
      <h2>City: {props.city}</h2>
    </header>
  );
}

export default Header;
