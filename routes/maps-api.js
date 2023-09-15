const express = require('express');
const router  = express.Router();
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



//GET /api/pins/:mapid:

router.get('/api/pins/:mapid', (req, res) => {
  //is it supposed to be req.mapid=? req.params.mapid?
  mapQueries.getMapById(mapid)
  .then((maps)=>{
    res.json({maps})
  })
})


// Read one GET
//get a specific map?
//Jeremy (based on map id?)

router.get()



// Update POST

// DELETE POST



module.exports = router;
