const express = require("express");
const router = express.Router();
// const keys = require("../../config/keys");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/test", (req, res) =>
  res.json({
    msg: "User Test Paths Work"
  })
);

module.exports = router;
