const express = require('express');
const router  = express.Router();
const favQueries = require('../db/queries/favourites');

// CRUD api 
// Create POST request

// Read all GET
router.get('/', (req, res) => {
  favQueries.getFavourites()
  .then((favourites)=>{
    res.json({ favourites });
  })

});

// Read one GET

// Update POST

// DELETE POST



module.exports = router;
