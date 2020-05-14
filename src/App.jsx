import React from "react";

function App() {
  // creating a name variable
  let name = "Soumyadeep";

  // creating a date variable
  let curDate = new Date();
  let curTime = new Date();

  // storing current hours
  curDate = curDate.getHours();
  curTime = curTime.getMinutes();

  // creating a greetigs variable
  let greetings = {};

  // creating a inline-css variable
  const cssstyle = {};

  if (curDate >= 5 && curDate <= 11) {
    greetings = "Good Morning";
    cssstyle.color = "green";
  } else if (curDate >= 12 && curDate <= 17) {
    greetings = "Good Afternoon";
    cssstyle.color = "orange";
  } else if (curDate >= 18 && curDate <= 21) {
    greetings = "Good Evening";
    cssstyle.color = "grey";
  } else {
    greetings = "Good Night";
    cssstyle.color = "black";
  }

  return (
    <div className="container">
      <h2 className="clock">
        Current Time is {curDate}:{curTime}
      </h2>
      <h1>
        <span style={cssstyle}> {greetings}, </span> &nbsp; {name}
      </h1>
    </div>
  );
}

export default App;
