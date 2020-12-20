import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getStories } from "../../actions/stories";
import Story from "../Story/Story";
import Spinner from "../Spinner/Spinner";
import "./Stories.scss";

const Stories = ({ getStories, stories: { stories, loading } }) => {
  useEffect(() => {
    getStories();
  }, [getStories, loading]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="Stories text-center">
      <h1>Your Stories</h1>
      {stories.length > 0 ? (
        <div className="stories-container">
          {stories.map((story) => (
            <Story key={story._id} story={story} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  stories: state.stories,
});

export default connect(mapStateToProps, { getStories })(Stories);
