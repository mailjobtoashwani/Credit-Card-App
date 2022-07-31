import React, { useState, useEffect } from "react";
import { addcardAPI, getAllAPI } from "./api/service";
import CreateForm from "./AddForm";
import TodoTable from "./CardTable";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllAPI().then((todos) => setTodos(todos));
  }, []);

  const addTodo = (todo) => {
    addcardAPI(todo).then((data) => {
      let { rows } = todos;
      rows.push(todo);
      setTodos({ rows });
    });
  };

  return (
    <main role="main" className="container">
      <h1>Credit Card System </h1>
      <CreateForm onCreate={addTodo} />
      <TodoTable todos={todos}></TodoTable>
    </main>
  );
};

export default App;
