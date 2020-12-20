import React from "react";
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
        <a
          className="nav-link"
          href="/add-story"
          data-target=".navbar-collapse.show"
        >
          Share Story
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="/stories"
          data-target=".navbar-collapse.show"
        >
          My Stories
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link disabled"
          href="/contact"
          data-target=".navbar-collapse.show"
        >
          Contact
        </a>
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
        <a className="nav-link" href="/" data-target=".navbar-collapse.show">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="/add-story"
          data-target=".navbar-collapse.show"
        >
          Share Story
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link disabled"
          href="/contact"
          data-target=".navbar-collapse.show"
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="/login"
          data-target=".navbar-collapse.show"
        >
          Login
        </a>
      </li>
    </ul>
  );
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <i className="fas fa-book-open"></i>
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
          <span className="navbar-toggler-icon"></span>
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
