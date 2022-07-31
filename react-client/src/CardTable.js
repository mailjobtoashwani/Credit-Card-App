import React from "react";

function TodoTable(props) {
  const { todos } = props;
  const { rows } = todos;
  const tableRows = rows?.map((cardinfo) => {
    //  console.log(JSON.stringify(info))
    return (
      <tr key={cardinfo.card_id}>
        <td>{cardinfo.name}</td>
        <td>{cardinfo.card_number}</td>
        <td>{cardinfo.balance}</td>
        <td>{cardinfo.card_limit}</td>
      </tr>
    );
  });

  return (
    <div className="App mt-5">
      <h2>Existing Cards</h2>
      <table className="table table-bordered table-sm">
        <caption hidden>Existing Cards</caption>
        <thead className="table-secondary">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Card Number</th>
            <th scope="col">Balance</th>
            <th scope="col">Limit</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default TodoTable;
