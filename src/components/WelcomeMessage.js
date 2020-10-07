import React from "react";
import "../App.css"

function WelcomeMessage(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay
    if (hours < 12){
      timeOfDay = "morning,"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon,"
    } else {
      timeOfDay = "evening,"
    };
    return (
        <div>
            <h1 id="welcomeMessage" >Good {timeOfDay} </h1>
        </div>
    )
}

export default WelcomeMessage;