import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { login } from "../../actions/auth";
import "./Login.scss";

const Login = ({ login, isAuthenticated }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/stories" />;
  }

  return (
    <div className="Login">
      <h2 className="mb-3">Login</h2>
      <form onSubmit={(e) => onSubmit(e)}>
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h5 className="mt-4">
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </h5>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
