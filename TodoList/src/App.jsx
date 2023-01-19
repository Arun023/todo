import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleClick = () => {
    setTodoList((prev) => [...prev, input]);
    setInput("");
  };

  const addchecked = (event) => {
    event.currentTarget.classList.toggle("checked");
  };

  console.log(todoList);
  return (
    <div className="App">
      <div id="myDIV" className="header">
        <h2 style={{ margin: "5px" }}>My To Do List</h2>
        <input
          type="text"
          id="myInput"
          placeholder="Title..."
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <span className="addBtn" onClick={() => handleClick()}>
          Add
        </span>
      </div>
      {todoList?.map((id) => {
        return (
          <ul id="myUL" key={id} style={{display:"flex"}}>
            <li onClick={(event) => addchecked(event)}>{id}</li><div>❌</div>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
