import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="ContactForm">
      <h1>
        <i class="fas fa-paper-plane"></i> Contact Us
      </h1>
      <p className="lead">
        Let us know what you think! In order to provide better service, please
        do not hesitate to give us your feedback. Thank you.
      </p>

      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            placeholder="Subject"
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            id="body"
            name="body"
            placeholder="How can we help you?"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
