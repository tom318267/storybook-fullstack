import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="overlay">
        <div className="container text-center">
          <h1 className="display-1 animate__animated animate__flipInX">
            <span>
              <img
                style={{
                  width: "70px",
                  position: "relative",
                  bottom: "10px",
                  left: "20px",
                }}
                src="/pen.png"
                alt=""
              />
            </span>{" "}
            StoryBook
          </h1>
          <p className="lead mb-5">
            Join StoryBook and tell us your favorite stories!
          </p>
          <div className="login">
            <Link to="/login">
              <button className="btn btn-primary login-button">Login</button>
            </Link>
            <Link to="/sign-up">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
