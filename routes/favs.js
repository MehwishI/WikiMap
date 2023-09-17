//Renders ejs templates (client's view)

const express = require('express');
const router = express.Router();
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

router.get('/', (req, res) => {
  res.render('favs', { apiKey });

});

module.exports = router;
