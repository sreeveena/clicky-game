import React from "react";

function Header({ children }) {
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 20, textAlign: "center" }}
      className="header"
    >
      <h1>Clicky Game!</h1>
      <h4> Click on an image to earn points, but don't click on any more than once!</h4>
    </div>
  );
}

export default Header;
