import React from "react";

function Footer({ children }) {
  return (
    <div
      style={{ height: 45, clear: "both", paddingTop: 20, textAlign: "center" }}
      className="footer"
    >
      <div></div>
      <div className="bg-primary">Clicky Game!</div> 
    </div>
  );
}

export default Footer;
