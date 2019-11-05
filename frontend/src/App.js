import React, { Component } from "react";
import Background from "./assets/stadium.jpg";
import "./App.css";

export default class App extends Component {
  render() {
    const backgroundStyle = {
      backgroundImage: `url(${Background})`
    };
    return (
      <div className="app">
        <div className="background">
          <div className="background_color" />
          <div className="background_image" style={backgroundStyle}></div>
        </div>
        <div className="signup_container">
          <div className="left_container"></div>
          <div className="right_container"></div>
        </div>
      </div>
    );
  }
}
