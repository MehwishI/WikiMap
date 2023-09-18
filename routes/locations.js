
const express = require('express');
const router  = express.Router();
const apiKey = process.env.GOOGLE_MAPS_API_KEY;


router.get('/', (req, res) => {
  res.render('locs-old',{ apiKey });

});

module.exports = router;
