import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white p-4 text-center">
        <div className="container">
          Copyright &copy; {new Date().getFullYear()} Michael Richardson
        </div>
      </footer>
    );
  }
}

export default Footer;
