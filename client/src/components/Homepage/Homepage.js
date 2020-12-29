import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="listening-container animate__animated animate__fadeInLeft">
        <div className="line"></div>
        <h1>
          We're listening, <br />
          tell us your story!
        </h1>
        <Link to="/sign-up">
          <button className="btn btn-primary get-started">Get Started</button>
        </Link>
        <div className="circle">
          <i class="fas fa-quote-left"></i>
          <h5>
            "Storybook is a great
            <br /> way to share your
            <br /> personal experiences
            <br /> in life and help
            <br /> out others!"{" "}
          </h5>
          <h2>- Stacy</h2>
        </div>
      </div>

      <div className="white-container">
        <div className="submit-story">
          <i class="fas fa-book-open"></i>
          <h5>Submit Story</h5>
          <p>
            Inspire others with your
            <br /> narrative. Stories are a great
            <br /> way to deliver a message.
          </p>
        </div>

        <span className="divider"></span>

        <div className="help-others">
          <i class="fas fa-handshake"></i>
          <h5>Help Others</h5>
          <p>
            People may learn from your story.
            <br /> You can help others who might not
            <br /> have the voice to speak out.
          </p>
        </div>

        <span className="divider"></span>

        <div className="comment">
          <i class="fas fa-comment"></i>
          <h5>Comment</h5>
          <p>
            If you see a story that inspires
            <br /> you or you enjoy let that author
            <br /> know!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
