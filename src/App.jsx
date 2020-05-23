import React, { useState } from "react";
import Logic from "./Components/Logic/Logic";
import './index.css'

function App() {
  let newTime = "Time - " + new Date().toLocaleTimeString()

  const [curTime, SetCurTime] = useState(newTime)

  const UpdatedTime = () => {
    newTime = "Time : " + new Date().toLocaleTimeString()
    SetCurTime(newTime)
  }

  // creating a name variable
  let name = "Chris";
  // creating a date variable
  let curHours = new Date();
  // storing current hours
  curHours = curHours.getHours();

  // creating a greetigs variable
  let greetings = {};

  // creating a inline-css variable
  const cssstyle = {};

  if (curHours >= 4 && curHours <= 11) {
    greetings = "Good Morning";
    cssstyle.color = "green";
  } else if (curHours >= 12 && curHours <= 17) {
    greetings = "Good Afternoon";
    cssstyle.color = "orange";
  } else if (curHours >= 18 && curHours <= 19) {
    greetings = "Good Evening";
    cssstyle.color = "white";
  } else {
    greetings = "Good Night";
    cssstyle.color = "black";
  }
  return (
    <React.Fragment>
      <div className="container">
        <Logic />
        <h1 className="clock">{curTime}</h1>
        <h2>
          <span style={cssstyle}> {greetings}, </span> {name}
        </h2>
        <button onClick={UpdatedTime}>Update</button>
      </div>
    </React.Fragment>
  );
}

export default App;
