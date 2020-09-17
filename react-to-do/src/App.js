import React from 'react';
import MyToDo from './components/MyToDo';
import "./App.css"
import ContactCard from './components/ContactCard';

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay

  if (hours < 12){
    timeOfDay = "morning,"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon,"
  } else {
    timeOfDay = "evening,"
  }

  return (
    <div>
      <h1>Good {timeOfDay}</h1>
      <MyToDo></MyToDo>
      <ContactCard
        contact={{name: "jamie", email: "mrwhiskers", phone: "4403"}}
      />
    </div>
  );
}

export default App;