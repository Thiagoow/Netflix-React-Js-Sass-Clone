import React from "react";
//Components:
import Button from "../components/Button";
//Images:
import reactLogo from "/assets/img/reactLogo.svg";

export default function Home() {
  return (
    <div className="App">
      <img src={reactLogo} className="appLogo" alt="logo" />
      <p>Hello Vite + React!</p>
      <p>
        <Button />
      </p>

      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>

      <p className="links">
        <a
          className="appLink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {" | "}
        <a
          className="appLink"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </div>
  );
}
