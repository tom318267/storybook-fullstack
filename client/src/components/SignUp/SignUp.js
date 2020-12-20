import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { register } from "../../actions/auth";
import "./SignUp.scss";

const SignUp = ({ register, isAuthenticated }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/stories" />;
  }

  return (
    <div className="SignUp">
      <h2 className="mb-3">Sign Up</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter name"
            value={name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            onChange={(e) => onChange(e)}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => onChange(e)}
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={(e) => onChange(e)}
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h5 className="mt-4">
        Already have an account? <Link to="/login">Sign In</Link>
      </h5>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(SignUp);
