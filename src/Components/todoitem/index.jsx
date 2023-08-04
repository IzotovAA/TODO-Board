import React from "react";
import "./index.css";
import Button from "../button";

function TodoItem({ todoName, onClick, onChange }) {
  return (
    <li className="App-todo__item">
      {todoName}
      <div className="item-container">
        <label className="App-label-checkbox">
          <input type="checkbox" id="App-checkbox" onChange={onChange} />
          <span className="App-checkbox-fake"></span>
        </label>
        <Button name="Edit TODO" className="App-todo-btn" onClick={onClick} />
      </div>
    </li>
  );
}

export default TodoItem;
