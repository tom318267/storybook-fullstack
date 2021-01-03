import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import { addLike } from "../../actions/stories";
import "./Story.scss";

const Story = ({ addLike, story: { title, body, _id } }) => {
  return (
    <div className="Story bg-light mb-3">
      <div className="card-header">
        <h5>{title}</h5>
      </div>
      <div className="card-body">
        <TextTruncate
          className="story-truncate"
          line={1}
          element="p"
          truncateText="..."
          text={body}
        />

        <Link to={`/stories/${_id}`}>Read more</Link>
      </div>
    </div>
  );
};

export default connect(null, { addLike })(Story);
