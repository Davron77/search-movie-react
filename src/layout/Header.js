import React from "react";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper container">
        <a href="!#" className="brand-logo">
          React
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Movie</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
