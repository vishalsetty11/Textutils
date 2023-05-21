import * as React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

function changeTitle()
{
    document.title ="Textutils | About";
}

function changeBackTitle() {
  document.title = "Textutils";
}


function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className={"container-fluid"}>
        <Link
          className={`navbar-brand branding text-${
            props.mode === "light bg-primary-subtle" ? "dark" : "light"
          }`}
          to="/"
          onClick={changeBackTitle}
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link text-${
            props.mode === "light bg-primary-subtle" ? "dark" : "light"
          }`} aria-current="page" to="/about" onClick={changeTitle}>
                {props.subTitle1}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`form-check form-switch text-${
          props.mode === "light bg-primary-subtle" ? "dark" : "light"
        }`}
      >
        {
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
        }
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {props.modeDes}
        </label>
      </div>
    </nav>
  );
}

Navbar.protoTypes = {
  title: PropTypes.string,
  subTitle1: PropTypes.string,
  subTitle2: PropTypes.string,
  subTitle3: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Webpage Name",
  subTitle1: "SubTitle 1",
  subTitle2: "SubTitle 2",
  subTitle3: "SubTitle 3",
};

export default Navbar;
