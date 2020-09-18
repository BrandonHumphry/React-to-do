import React from 'react';
import MyToDo from './components/MyToDo';
import "./App.css"
import WelcomeMessage from './components/WelcomeMessage';

function App() {

  return (
    <div>
      <WelcomeMessage/>
      <MyToDo/>
    </div>
  );
}

export default App;