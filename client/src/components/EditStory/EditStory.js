import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getStory, updateStory } from "../../actions/stories";
import "./EditStory.scss";

const EditStory = ({
  stories: { story, loading },
  getStory,
  updateStory,
  match,
}) => {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  const { title, body } = form;

  useEffect(() => {
    getStory(match.params.id);
    setForm({
      title: loading || !story.title ? "" : story.title,
      body: loading || !story.body ? "" : story.body,
    });
  }, [getStory, loading, match.params.id, story.body, story.title]);

  const onChange = (e) => {
    setForm({
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateStory(form, story._id);

    window.location = "/stories";
  };
  return (
    <div className="EditStory">
      <h2>Share Story</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="title">Your Title</label>
          <input
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter title of your story"
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Your Story</label>
          <textarea
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="body"
            name="body"
            placeholder="Tell us your story"
            value={body}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stories: state.stories,
});

export default connect(mapStateToProps, { getStory, updateStory })(EditStory);
