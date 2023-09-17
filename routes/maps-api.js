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

router.get('create')

//GET /api/pins/:mapid:



//edit/update map
//Jeremy - I had this debate with myself if it would be get or post or a combo>
//like, you have to retrieve the map but also update it....
router.post('/:id', (req, res) => {
  //unclear if this should use req.params or req.body
  //this article seems to suggest anytingt aht is :name is req.params
  //return res.json({ params: req.params, body: req.body });
  const mapData = [req.body.user_id, req.body.uid, req.body.title, req.body.center_longitude, req.body.center_latitude];
  //console.log(mapData);
  mapQueries.createMap(mapData)
    .then((map) => {
      res.json({ map });
    })
    .catch((err)=>{
      console.log("create map route error: ", err)
    })

  //do not pass req.params or req.body, pass the indvidual strings, pass each param as a string
  //pull map in question
  //make an update query
});


router.post('/');

// Read one GET
//get a specific map?
//Jeremy (based on map id?)

//router.get()



// Update POST

// DELETE POST



module.exports = router;
