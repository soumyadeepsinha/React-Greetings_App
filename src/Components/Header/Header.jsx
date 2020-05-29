import React, { Component } from 'react'
import './Header.modules.css';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Welcome to React App...</h1>
          <p className="made_by">Made by Soumaydeep Sinha 🕶 </p>
        </div>
      </React.Fragment>
    )
  }
}
