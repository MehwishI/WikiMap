const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

// CRUD api maps
// Create POST request

// Read all GET
router.get('/', (req, res) => {
  db.query(`SELECT * from maps
  LEFT JOIN locations
  on maps.id = locations.map_id`)
  .then((data)=>{
    res.json(data.rows)
  })

});

// Read one GET

// Update POST

// DELETE POST



module.exports = router;
