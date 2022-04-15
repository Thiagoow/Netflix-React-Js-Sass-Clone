import React from "react";
import Profiles from "../components/Profiles";
import logo from "../../assets/img/logo.svg";

export default function SelectUser() {
  return (
    <div className="home">
      <a href="/" className="logoBtn">
        <img src={logo} alt="Netflix Logo" className="logo" />
      </a>

      <h1>Who's watching?</h1>
      <Profiles />
    </div>
  );
}
