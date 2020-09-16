import  React from 'react';

function MyToDo() {
    return (
      <div>
        <h1>Brandon's To Do List</h1>
        <ul>
          <input type ="checkbox"/><p>Sleep</p>
          <input type ="checkbox"/><p>Eat</p>
          <input type ="checkbox"/><p>Work</p>
          <input type ="checkbox"/><p>Design</p>
          <input type ="checkbox"/><p>Develop</p>
        </ul>
      </div>
    );
  }

export default MyToDo;