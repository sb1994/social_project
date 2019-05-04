const express = require("express");
const users = require("./routes/users");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const mongoose = require("mongoose");

// Use Routes
app.use("/api/users", users);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social_project",
  {
    useMongoClient: true
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT);
