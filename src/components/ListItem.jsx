const ListItem = (props) => {
  const { dog } = props;
  console.log("list", props);
  return (
    <li>
      <span>{dog.name}:</span> {dog.notes}
      <span>&nbsp; Grade:</span> {dog.grade}
      <span>&nbsp; Present:</span> {dog.present ? "Yes" : "No"}
    </li>
  );
};

export default ListItem;
