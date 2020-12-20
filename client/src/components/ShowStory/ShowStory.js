import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStory, deleteStory } from "../../actions/stories";
import "./ShowStory.scss";

const ShowStory = ({
  getStory,
  stories: { story },
  match,
  deleteStory,
  history,
}) => {
  useEffect(() => {
    getStory(match.params.id);
  }, [getStory, match.params.id]);
  return story ? (
    <div className="ShowStory text-center">
      <h1 className="display-5">{story.title}</h1>
      <p>{story.body}</p>
      <div className="edit-delete-div">
        <Link to={`/edit/${story._id}`}>
          <button className="btn btn-primary edit-story">Edit story</button>
        </Link>
        <button
          onClick={() => deleteStory(story._id, history.push("/stories"))}
          className="btn btn-primary"
        >
          Delete story
        </button>
      </div>
    </div>
  ) : (
    <div>
      <h2 className="not-available text-center">Story not available</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stories: state.stories,
});

export default connect(mapStateToProps, { getStory, deleteStory })(ShowStory);
