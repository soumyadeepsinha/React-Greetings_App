import React from "react";
import Logic from "./Components/Logic/Logic";

function App() {
  // creating a name variable
  let name = "Chris";

  // creating a date variable
  let curHours = new Date();
  let curMin = new Date();
  // storing current hours
  curHours = curHours.getHours();
  curMin = curMin.getMinutes();

  let AmOrPm = curHours >= 12 ? "pm" : "am";
  let curTime = curHours % 12 || 12;

  let finalTime = "Time - " + curTime + ":" + curMin + " " + AmOrPm;

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
    <>
      <div className="container">
        <Logic />
        <h1 className="clock">{finalTime}</h1>
        <h2>
          <span style={cssstyle}> {greetings}, </span> {name}
        </h2>
      </div>
    </>
  );
}

export default App;
