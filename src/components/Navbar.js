import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.link1}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.link2}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.link3}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
};

// Navbar.defaultProps = {
//                     title: "Title",
//                     link1: "Link1",
//                     link2: "Link3",
//                     link3: "Link2",
// }

export default Navbar;
