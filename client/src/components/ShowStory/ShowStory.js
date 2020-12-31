import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import {
  getStory,
  deleteStory,
  deleteComment,
  addLike,
  removeLike,
} from "../../actions/stories";
import "./ShowStory.scss";

const ShowStory = ({
  user,
  getStory,
  stories: { story },
  match,
  deleteStory,
  deleteComment,
  addLike,
  removeLike,
  history,
}) => {
  useEffect(() => {
    getStory(match.params.id);
  }, [getStory, match.params.id]);

  return story ? (
    <div className="ShowStory text-center">
      <div className="edit-delete-div">
        {story.user._id === user.user._id ? (
          <>
            <Link to={`/edit/${story._id}`}>
              <button className="btn btn-primary edit-story">
                <i className="fas fa-edit"></i>
              </button>
            </Link>
            <button
              style={{ marginRight: "10px" }}
              onClick={() => deleteStory(story._id, history.push("/stories"))}
              className="btn btn-primary"
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </>
        ) : null}

        {story.user._id !== user.user._id && (
          <div className="like-dislike-comment">
            <button
              onClick={() => addLike(story._id)}
              className="btn btn-primary"
            >
              <i className="fas fa-thumbs-up"></i>
              {story.likes.length > 0 && <span> {story.likes.length}</span>}
            </button>
            <button
              onClick={() => removeLike(story._id)}
              className="btn btn-primary"
            >
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/comment/${story._id}`}>
              <button className="btn btn-primary comment-link">
                <i className="fas fa-comment"></i>
              </button>
            </Link>
          </div>
        )}
      </div>

      <div className="story-container">
        <h1 className="display-4">{story.title}</h1>
        <p>{story.body}</p>
      </div>

      <div className="comment-container">
        {story.comments.map((comment) => (
          <div key={comment._id} className="comment-box">
            <h4 style={{ color: "#7c1313" }} className="comment-name">
              <span>
                <i className="fas fa-user-circle"></i>
              </span>{" "}
              {comment.name}{" "}
              {user.user._id === comment.user && (
                <i
                  onClick={(e) => deleteComment(story._id, comment._id)}
                  style={{
                    cursor: "pointer",
                    marginTop: "20px",
                    fontSize: "1.2rem",
                    float: "right",
                  }}
                  className="fas fa-trash-alt"
                ></i>
              )}
            </h4>
            <small>
              <Moment format="MM/DD/YYYY">{comment.date}</Moment>
            </small>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      <div className="go-back">
        <Link to="/stories">
          <button className="btn btn-primary">
            <i className="fas fa-arrow-left"></i> Go Back
          </button>
        </Link>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  stories: state.stories,
  user: state.auth,
});

export default connect(mapStateToProps, {
  getStory,
  deleteStory,
  deleteComment,
  addLike,
  removeLike,
})(ShowStory);
