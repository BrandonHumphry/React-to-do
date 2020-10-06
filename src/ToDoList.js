import React, {Component} from 'react';
import "./App.css"
import ToDoItem from "./ToDoItem";
import todosData from "./todosData";

class ToDoList extends Component {
    constructor(){
      super()
      this.state = {
        todos: todosData
      }
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(id) {
      console.log(id);
  
      const updatedTodos = this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          console.log(todo)
        }
        return todo
      });
  
      this.setState({todos:updatedTodos})
      console.log("changed", id)
      // const updatedTodos = this.state.todos.map(todo => {
      //   todo.id === id && (todo.completed = !todo.completed);
      //   return todo
      // });
      // this.setState({todos: updatedTodos})
    }
  
    render() {
      const todoItems = this.state.todos.map(item => (
        <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>
      ))
  
      return (
        <div className="to-do-list">
          <h1>Brandon's To Do List</h1>
          {todoItems}
        </div>
      );
    }
  }
export default ToDoList;