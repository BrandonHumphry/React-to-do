import React from 'react';
import ToDoItem from './ToDoItem.js'

function MyToDo() {
    return (
      <div className="to-do-list">
        <h1>Brandon's To Do List</h1> 
          <ToDoItem></ToDoItem>
          <ToDoItem></ToDoItem>
          <ToDoItem></ToDoItem>
          <ToDoItem></ToDoItem>
          <ToDoItem></ToDoItem>
      </div>
    );
  }

export default MyToDo;