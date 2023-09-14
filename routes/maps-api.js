const express = require('express');
const router  = express.Router();
//const db = require('../db/connection');
const mapQueries = require('../db/queries/maps');

// CRUD api maps
// Create POST request

// Read all GET
router.get('/', (req, res) => {
  mapQueries.getMaps()
  .then((maps)=>{
    res.json({ maps });
  })

});

// Read one GET

// Update POST

// DELETE POST



module.exports = router;
