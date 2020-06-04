import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Michael Richardson
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="https://github.com/michaelprichardson">
                  <i className="fab fa-github fa-lg"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://stackoverflow.com/users/4806467/michael-richardson">
                  <i className="fab fa-stack-overflow fa-lg"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://www.linkedin.com/in/michael-peter-richardson/">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export default Navbar;
