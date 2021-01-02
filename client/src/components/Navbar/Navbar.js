import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

import "./Navbar.scss";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/" data-target=".navbar-collapse.show">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          to="/add-story"
          data-target=".navbar-collapse.show"
        >
          Share Story
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          to="/stories"
          data-target=".navbar-collapse.show"
        >
          Story Feed
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link disabled"
          to="/contact"
          data-target=".navbar-collapse.show"
        >
          Contact
        </Link>
      </li>
      <li onClick={logout} className="nav-item">
        <a href="#!" className="nav-link" data-target=".navbar-collapse.show">
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/" data-target=".navbar-collapse.show">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          to="/add-story"
          data-target=".navbar-collapse.show"
        >
          Share Story
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link disabled"
          to="/contact"
          data-target=".navbar-collapse.show"
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          to="/login"
          data-target=".navbar-collapse.show"
        >
          Login
        </Link>
      </li>
    </ul>
  );
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <a className="navbar-brand" href="/">
          <h2>
            Story<span className="book">Book</span>
          </h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i style={{ color: "#a80c03" }} className="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
