import React from "react";

function ToDoItem(props) {
  return (
    <div className= "to-do-item">
      <input type="checkbox" checked={props.item.completed} />
      <p>{props.item.text}</p>
    </div>
  );
}

export default ToDoItem;
