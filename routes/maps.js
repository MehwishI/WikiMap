const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  db.query(`SELECT * from maps
  LEFT JOIN locations
  on maps.id = locations.map_id`)
  .then((data)=>{
    res.json(data.rows)
  })
  //res.render('users');
});



module.exports = router;
