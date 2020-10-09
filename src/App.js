import React from 'react';
import "./App.css"
import WelcomeMessage from './components/WelcomeMessage';
import ToDoList from './ToDoList'
import Notes from './components/Notes'

function App() {
  return (
    <div>
      <WelcomeMessage/>
      <ToDoList/>
      <Notes/>
    </div>
  );
}
export default App 