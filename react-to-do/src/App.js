import React, {Component} from 'react';
import "./App.css"
import WelcomeMessage from './components/WelcomeMessage';
import ToDoItem from "./ToDoItem";
import todosData from "./todosData";

// function App() {

//   return (
//     <div>
//       <WelcomeMessage/>
//       <MyToDo/>
//     </div>
//   );
// }

class App extends React.Component {
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
    // console.log("changed", id)
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>
    ))

    return (
      <div className="to-do-list">
        <WelcomeMessage/>
        <h1>Brandon's To Do List</h1>
        {todoItems}
      </div>
    );
  }
}

// export default MyToDo


export default App;