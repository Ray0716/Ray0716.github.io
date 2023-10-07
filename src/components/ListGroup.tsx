function ListGroup() {
  let items = [
    'New York',
    'SF',
    'TK',
    'PY',
  ];
  items = [];

  

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>

        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
}

export default ListGroup;
