import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import TextTruncate from "react-text-truncate";
import "./Story.scss";

const Story = ({ userInfo, story: { title, body, _id, createdAt, user } }) => {
  return userInfo._id === user ? (
    <div className="Story bg-light mb-3">
      <div className="card-header">
        <h5>{title}</h5>
      </div>
      <div className="card-body">
        {/* <p className="card-text">{body}</p> */}
        <TextTruncate line={1} element="p" truncateText="..." text={body} />
        <Link to={`/stories/${_id}`}>Read more</Link>
      </div>

      <small>
        Created on: <Moment format="MM/DD/YYYY">{createdAt}</Moment>
      </small>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  userInfo: state.auth.user,
});

export default connect(mapStateToProps)(Story);
