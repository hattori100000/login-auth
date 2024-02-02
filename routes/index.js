const express = require("express");
const router = express.Router();
const { ensureAuthenticated ,forwardAuthenticated} = require('../db/auth');

// Welcome page
router.get('/',forwardAuthenticated, (req, res) => res.render("welcome"));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    name: req.user
  });
});

module.exports = router;
