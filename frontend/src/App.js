import React, { Component } from "react";
import Background from "./assets/stadium.jpg";
import Cheer from "./assets/cheer.jpg";
import Logo from "./assets/efuseLogo.png";
import BrandName from "./assets/efuseName.png";
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
          <div className="left_container">
            <img className="cheer" src={Cheer} alt="cheer" />
            <div className="left_container_info">
              <div className="left_container_top">
                <img className="logo" src={Logo} alt="logo" />
                <img className="brand_name" src={BrandName} alt="brand name" />
              </div>
              <div className="left_container_bottom">
                <div className="info_item">
                  <i className="info_item_icon fas fa-project-diagram"></i>
                  <p className="info_item_text">
                    Connect with gamers all around the world
                  </p>
                </div>
                <div className="info_item">
                  <i className="info_item_icon fas fa-search"></i>
                  <p className="info_item_text">
                    Discover to scholarships, tournaments, teams and events
                  </p>
                </div>
                <div className="info_item">
                  <i className="info_item_icon fas fa-file-invoice"></i>
                  <p className="info_item_text">
                    Track and share your professional gaming resume
                  </p>
                </div>
              </div>
              <div className="social_container">
                <p className='social_call_to_action'>
                  FOLLOW OUR SOCIALS
                </p>
              </div>
            </div>
          </div>
          <div className="right_container"></div>
        </div>
      </div>
    );
  }
}
