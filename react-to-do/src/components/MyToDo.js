import React, { Component } from "react";
import ToDoItem from "./ToDoItem.js";
import todosData from "../todosData";

// function MyToDo() {
//     const ToDoItems = todosData.map(item => <ToDoItem key={item.id} item={item}/>)

//     return (
//       <div className="to-do-list">
//         <h1>Brandon's To Do List</h1>
//         {ToDoItems}
//       </div>
//     );
//   }
class MyToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  render() {
    const ToDoItems = this.state.todos.map(item => (
      <ToDoItem key={item.id} item={item} />
    ));

    return (
      <div className="to-do-list">
        <h1>Brandon's To Do List</h1>
        {ToDoItems}
      </div>
    );
  }
}

export default MyToDo;
