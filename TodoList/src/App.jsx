import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addConsistent = () => {
    localStorage.setItem("List", JSON.stringify(todoList));
  };
  const todo = JSON.parse(localStorage.getItem("List"));

  const handleClick = () => {
    setTodoList((prev) => [...prev, input]);
    setInput("");
    addConsistent();
  };

  useEffect(() => {
    localStorage.setItem("List" , JSON.stringify(todoList))
      setTodoList(todo);
  }, []);
  const addchecked = (event) => {
    event.currentTarget.classList.toggle("checked");
  };

  console.log(todoList);
  console.log(todo);
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
          <ul id="myUL" key={id}>
            <li
              onClick={(event) => addchecked(event)}
              // className={`${active ? "checked" : ""}`}
            >
              {id}
            </li>
            {/* <li className="checked">Pay bills</li> */}
          </ul>
        );
      })}
    </div>
  );
}

export default App;
