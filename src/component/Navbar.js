import React from "react";
import logo from "../logo.png";

function Navbar() {
  return (
    <React.Fragment>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="Google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>Sample Test</code>
        </a>
      </div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          <img
            height="50"
            src="https://lh3.googleusercontent.com/MnbuPHRjioCEXRTqN7pRo_QJa2CHE4kUKNppiHBRaGnB7oluVft-wzJZG-QQU35ZtHyP=s85"
            className="d-inline-block align-top img-circle mr-3"
            alt="bubble"
          />
          Sample Test
        </span>
        <small>Yoseph Hailu 2019</small>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
