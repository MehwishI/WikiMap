const express = require("express");
const router = express.Router();
const locQueries = require("../db/queries/locations");
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

// CRUD api maps
// Create POST request

// Read all GET
router.get("/locs", (req, res) => {
  locQueries.getLocations().then((locations) => {
    res.json({ locations });
  });
});
//GET all locations for a map id
router.get("/:mapid", (req, res) => {
  locQueries
    .getLocsByMapId(req.params.mapid)

    .then((locations) => {
      //console.log(locations)
      res.json({ locations });
      //res.render()
    });
});

//GET /api/pins/:mapid:

// router.get(`/api/locs/${mapId}`, (req,res) => {
//   console.log("inside locs")
//   locQueries.getLocsByMapId(mapid)
//   .then((locations) => {
//     res.json({locations,apiKey});
//   });

// })

//edit/update map
//like, you have to retrieve the map but also update it....
router.post("/:id", (req, res) => {
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
