import React from "react";

function ToDoItem(props) {
  return (
    <div className="to-do-item">
      <input
        type="checkbox"
        onChange={() => console.log("Changed")}
        checked={props.item.completed}
      />
      <p>{props.item.text}</p>
    </div>
  );
}

// class ToDoItem extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       isloggedin: true
//     }
//   }

//   render(){
//     let wordDisplay
//     if (this.state.isloggedin === true) {
//       wordDisplay = "in"
//     } else {
//       wordDisplay = "out"
//     }
//     return (
//       <div>
//         <h1>You are currently logged{wordDisplay}</h1>
//       </div>
//     )
//   }
// }

export default ToDoItem;
