import React, { useState } from "react";

import "./App.css";

import Todo from "./components/Todo";
import List from "./components/List";
function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };

  return (
    <div className="App">
      <h1>To-do list</h1>

      <div>
        <main>
          <div className="box">
            <Todo addList={addList} />

            {listTodo.map((listing, i) => {
              return <List key={i} item={listing} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
