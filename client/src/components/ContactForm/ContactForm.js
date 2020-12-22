import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./ContactForm.scss";

const ContactForm = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const { email, subject, message } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ email, subject, message });
      console.log(body);

      const res = await axios.post("/contact", body, config);

      Toast.fire({
        icon: "success",
        title: "Message Sent!",
      });

      setForm({
        email: "",
        subject: "",
        message: "",
      });
      console.log(res);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="ContactForm">
      <h1>
        <i className="fas fa-paper-plane"></i> Contact Us
      </h1>
      <p className="lead">
        Let us know what you think! In order to provide better service, please
        do not hesitate to give us your feedback. Thank you.
      </p>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            onChange={(e) => onChange(e)}
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={subject}
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="message"
            name="message"
            placeholder="How can we help you?"
            value={message}
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
