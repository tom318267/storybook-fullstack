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
      <h2>
        <i class="fas fa-book"></i> Share Story
      </h2>
      <p className="lead">Tell us your story!</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title of Story"
            value={title}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="body"
            name="body"
            placeholder="Your Story"
            value={body}
            required
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
