import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addComment } from "../../actions/stories";
import "./CommentForm.scss";

const CommentForm = ({ history, match, addComment }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(match.params.id, { text });
    setText("");
    history.push(`/stories/${match.params.id}`);
  };

  return (
    <div className="CommentForm">
      <h2>
        <i className="fas fa-comment-dots"></i> Comment
      </h2>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <textarea
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="form-control"
            name="text"
            placeholder="Your comment"
            value={text}
          />
        </div>
        <div className="buttons-div">
          <Link to={`/stories/${match.params.id}`}>
            <button
              style={{ marginRight: "10px" }}
              type="submit"
              className="btn btn-primary"
            >
              Go Back
            </button>
          </Link>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { addComment })(CommentForm);
