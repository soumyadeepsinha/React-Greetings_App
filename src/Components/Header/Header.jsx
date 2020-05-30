import React from 'react'
import './Header.modules.css';

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="made_by">
          <h1>Welcome to Momentium React App</h1>
        </div>
      </React.Fragment>
    )
  }
}
