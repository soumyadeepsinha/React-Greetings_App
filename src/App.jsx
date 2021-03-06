import React, { useState } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import './index.css'

function App() {
  // store current time
  let newTime = "Time - " + new Date().toLocaleTimeString()

  // current value, updated value, iinitial value
  const [curTime, SetCurTime] = useState(newTime)

  // update function 
  const UpdatedTime = () => {
    newTime = "Time - " + new Date().toLocaleTimeString()
    SetCurTime(newTime)
  }

  // creating a date variable
  let curHours = new Date()
  // storing current hours
  curHours = curHours.getHours()

  // creating a greetigs variable
  let greetings = {};

  // creating a inline-css variable
  const cssstyle = {};

  if (curHours >= 4 && curHours <= 11) {
    greetings = "Good Morning"
    cssstyle.color = "green"
  } else if (curHours >= 12 && curHours <= 17) {
    greetings = "Good Afternoon"
    cssstyle.color = "orange"
  } else if (curHours >= 18 && curHours <= 19) {
    greetings = "Good Evening"
    cssstyle.color = "white"
  } else {
    greetings = "Good Night"
    cssstyle.color = "black"
  }
  // creating a name variable
  const Name = `Chris`

  return (
    <React.Fragment>
      <MuiThemeProvider>
        <div className="container">
          <Navbar />
          <Header />
          <h1 className="clock">{curTime}</h1>
          <h2>
            <span style={cssstyle}> {greetings}</span> {Name}
          </h2>
          <button onClick={UpdatedTime}>Update Time</button>
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App
