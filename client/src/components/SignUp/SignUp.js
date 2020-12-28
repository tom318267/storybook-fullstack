import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { register } from "../../actions/auth";
import Swal from "sweetalert2";
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

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Toast.fire({
        icon: "error",
        title: "Wrong Credentials",
      });
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    Toast.fire({
      icon: "success",
      title: "Successfully registered",
      iconColor: "#7c1313",
    });
    return <Redirect to="/stories" />;
  }

  return (
    <div className="SignUp">
      <h2 className="mb-3">Sign Up</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChange(e)}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Email"
            value={email}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
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
