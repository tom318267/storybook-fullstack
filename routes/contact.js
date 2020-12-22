const express = require("express");
const router = express.Router();
const mailgunLoader = require("mailgun-js");
const config = require("config");

let mailgun = mailgunLoader({
  apiKey: config.get("mailgunApiKey"),
  domain: config.get("domain"),
});

const sendEmail = (to, from, subject, content) => {
  let data = {
    to,
    from,
    subject,
    text: content,
  };
  return mailgun.messages().send(data);
};

router.post("/", async (req, res) => {
  try {
    await sendEmail(
      "tomrago580@gmail.com",
      req.body.email,
      req.body.subject,
      req.body.message
    );
    res.send("Email sent");
  } catch (error) {
    console.error(err.message);
    res.status(500);
  }
});

module.exports = router;
