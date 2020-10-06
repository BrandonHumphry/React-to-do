import React from 'react';
import "./App.css"
import WelcomeMessage from './components/WelcomeMessage';
import ToDoList from './ToDoList'

function App() {
  return (
    <div>
      <WelcomeMessage/>
      <ToDoList/>
    </div>
  );
}
export default App 