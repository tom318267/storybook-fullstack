import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addStory } from "../../actions/stories";
import "./AddStory.scss";

const AddStory = ({ addStory }) => {
  let history = useHistory();
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  const { title, body } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addStory(form);
    setForm({
      title: "",
      body: "",
    });
    history.push("/stories");
  };
  return (
    <div className="AddStory">
      <h1>Share Story</h1>
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
        <button
          onClick={(e) => onSubmit(e)}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addStory })(AddStory);
