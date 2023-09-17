//Renders ejs templates (client's view)

const express = require('express');
const router = express.Router();
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

router.get('/', (req, res) => {
  res.render('maps', { apiKey }); // Pass the google API key to the maps.ejs template

});

router.get('/create', (req, res) => {

  //pass the api key to the render
  res.render('maps_new', { apiKey });
  //res.json({apiKey})

});

module.exports = router;
