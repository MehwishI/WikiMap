const express = require("express");
const router = express.Router();
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

router.get("/:id", (req, res) => {
  res.render("locs", { apiKey });
});

module.exports = router;
