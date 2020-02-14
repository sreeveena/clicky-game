import React, { Component } from "react";

class Nav extends Component{
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
              Clicky Game
            </a>
            <a className="navbar-item" style="center">
             Click an Image to begin!
            </a>
            <a className="navbar-item">
            Score: {this.props.score}| Top Score:  {this.props.top-score}
            </a>
          </nav>
        );
      }
}


export default Nav;
