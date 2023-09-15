const express = require('express');
const router = express.Router();
const mapQueries = require('../db/queries/maps');

// CRUD api maps
// Create POST request

// Read all GET
router.get('/', (req, res) => {
  mapQueries.getMaps()
    .then((maps) => {
      res.json({ maps });
    });

});



//GET /api/pins/:mapid:



//edit/update map
//Jeremy - I had this debate with myself if it would be get or post or a combo>
//like, you have to retrieve the map but also update it....
router.post('/:id', (req, res) => {
  return res.json({ params: req.params, body: req.body });
  mapQueries;
  //do not pass req.params or req.body, pass the indvidual strings, pass each param as a string
  //pull map in question
  //make an update query
});

// Read one GET
//get a specific map?
//Jeremy (based on map id?)

//router.get()



// Update POST

// DELETE POST



module.exports = router;
