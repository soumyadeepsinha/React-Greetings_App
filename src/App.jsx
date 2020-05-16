import React from "react";

function App() {
  // creating a name variable
  let name = "Chris";

  // creating a date variable
  let curHours = new Date();
  let curMin = new Date();
  // storing current hours
  curHours = curHours.getHours();
  curMin = curMin.getMinutes();

  let AmOrPm = curHours >= 12 ? 'pm' : 'am';
  let CurTime = (curHours % 12) || 12;

  let finalTime = "Time - " + CurTime + ":" + curMin + " " + AmOrPm;

  // creating a greetigs variable
  let greetings = {};

  // creating a inline-css variable
  const cssstyle = {};

  if (CurTime >= 4 && CurTime <= 11 && curMin <= 59 && AmOrPm === 'am') {
    greetings = "Good Morning";
    cssstyle.color = "green";
  } else if (CurTime >= 12 && CurTime <= 5 && curMin <= 59 && AmOrPm === 'pm') {
    greetings = "Good Afternoon";
    cssstyle.color = "orange";
  } else if (CurTime >= 6 && CurTime <= 7 && curMin <= 59 && AmOrPm === 'pm') {
    greetings = "Good Evening";
    cssstyle.color = "white";
  } else {
    greetings = "Good Night";
    cssstyle.color = "black";
  }
  return (
    <>
      <div className="search">
        <div className="gcse-searchbox-only" data-resultsUrl="https://googlecustomsearch.appspot.com/elementv2/two-page_results_elements_v2.html?query=test"></div>
        <script async src="https://cse.google.com/cse.js?cx=000888210889775888983:pqb3ch1ewhg"></script>
      </div>
      <div className="container">
        <h1 className="clock">
          {finalTime}
        </h1>
        <h2>
          <span style={cssstyle}> {greetings}, </span> {name}
        </h2>
      </div>
    </>
  );
}

export default App;
