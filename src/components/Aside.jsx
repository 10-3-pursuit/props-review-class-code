// I cannot use a for loop inside of JSX (aka inside the return of the function)

// I rely on array methods to iterate through arrays.Aside

// In order to list out elements such as <li>s, I map through the dogs prop and return an <li> for each iteration.Aside

// I must include a unique key in the <li> so that React can track the <li>

// I cannot use an 'if' statement in JSX so I must use a ternary if I am deciding which information in my .map function should be rendered in the browser

function Aside({ date, dogs }) {
  // const { date, dogs } = props;

  return (
    // cannot use for loop
    <aside>
      {/* I want to put a date here */}
      <h2>Today's Date: {date}</h2>
      <h3>Roster:</h3>
      <ol>
        {dogs.map(({ present, name }) =>
          present ? <li key={name}>{name}</li> : null
        )}
      </ol>
    </aside>
  );
}

export default Aside;
