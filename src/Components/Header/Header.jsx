import React, { Component } from 'react'
import './Header.modules.css';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="made_by">
          <h1>Welcome to React App...</h1>
          <p>Made by Soumaydeep Sinha </p>
        </div>
      </React.Fragment>
    )
  }
}
