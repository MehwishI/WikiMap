//Renders ejs templates (client's view)

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('favs');

});

module.exports = router;
