const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use(cors());

app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));
app.use("/stories", require("./routes/stories"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
