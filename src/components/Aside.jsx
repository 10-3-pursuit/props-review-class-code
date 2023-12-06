function Aside(props) {
  return (
    // cannot use for loop
    <aside>
      <h3>Roster:</h3>
      <ol>
        {props.dogs.map(
          (dog) => dog.present && <li key={dog.name}>{dog.name}</li>
        )}
      </ol>
    </aside>
  );
}

export default Aside;
