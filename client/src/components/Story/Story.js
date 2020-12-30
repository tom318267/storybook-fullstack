import React from "react";
import { Link } from "react-router-dom";

import TextTruncate from "react-text-truncate";
import "./Story.scss";

const Story = ({ story: { title, body, _id } }) => {
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

export default Story;
