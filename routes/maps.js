//Renders ejs templates (client's view)

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('maps');

});

router.get('/create', (req, res) => {
  res.render('maps_new');

});

module.exports = router;
