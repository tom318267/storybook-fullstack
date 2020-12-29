import React, { useState } from "react";

const CommentForm = () => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="CommentForm">
      <h2>
        <i className="fas fa-paper-plane"></i> Contact Us
      </h2>
      <p className="lead">
        Let us know what you think! In order to provide better service, please
        do not hesitate to give us your feedback. Thank you.
      </p>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="comment"
            name="comment"
            placeholder="Your comment"
            value={comment}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
