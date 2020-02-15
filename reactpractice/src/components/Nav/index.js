import React, { Component } from "react";

class Nav extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
          <nav className="navbar navbar-light bg-primary">
            <ul className="nav">
                <li>
                    <a className="navbar-brand" href="/">
                        <h3>Clicky Game</h3>
                    </a>
                </li>
                <li className="navbar-item ml-5 mr-5">
                    <h3>Click an Image to begin!</h3>
                </li>
                <li className="navbar-item ml-5 mr-5">   
                    <h3>Score: {this.props.score} | Top Score:  {this.props.topscore}</h3>
                </li>
            </ul>
          </nav>
        );
      }
}


export default Nav;
