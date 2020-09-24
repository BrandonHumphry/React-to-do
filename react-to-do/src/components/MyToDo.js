import React from "react";
import ToDoItem from "../ToDoItem.js";
import todosData from "./todosData";

class MyToDo extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const ToDoItems = this.state.todos.map(item => (
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>
    ));

    return (
      <div className="to-do-list">
        <h1>Brandon's To Do List</h1>
        {ToDoItems}
      </div>
    );
  }
}

export default MyToDo
