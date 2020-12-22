import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import "./Story.scss";

const Story = ({ userInfo, story: { title, body, _id, createdAt, user } }) => {
  return userInfo._id === user ? (
    <div className="Story bg-light mb-3">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <p className="card-text">{body}</p>
        <small>
          Created on: <Moment format="MM/DD/YYYY">{createdAt}</Moment>
        </small>
      </div>
      <Link to={`/stories/${_id}`}>See story</Link>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  userInfo: state.auth.user,
});

export default connect(mapStateToProps)(Story);
