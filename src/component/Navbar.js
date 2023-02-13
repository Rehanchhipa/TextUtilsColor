import React from "react";
import PropTypes from "prop-types";
import './Navbar.css';
import {Link} from 'react-router-dom'

export default function Navbar(props) {

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.modenav} bg-${props.mode}`}
        style={{color: "red !important"}}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex me-4">
            <div className="clr1 me-2" onClick={props.primary} style={{border: `1px solid ${props.clr}`}}>
            </div>
            <div className="clr2 me-2" onClick={props.dark} style={{border: `1px solid ${props.clr}`}}>
            </div>
            <div className="clr3 me-2" onClick={props.warning} style={{border: `1px solid ${props.clr}`}}>
            </div>
            <div className="clr4 me-2" onClick={props.light} style={{border: `1px solid ${props.clr}`}}>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "set title here",
  about: "set about here",
};
