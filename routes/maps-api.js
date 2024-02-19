const express = require('express');
const router = express.Router();
const mapQueries = require('../db/queries/maps');

// CRUD api maps
// Create POST request

//Read all GET
router.get('/', (req, res) => {
  mapQueries.getMaps()
    .then((maps) => {
      res.json({ maps });
    });

});



//GET /api/pins/:mapid:

router.post('/', (req, res) =>{
  // const title = req.body.title;
  console.log("create post route triggered")
  console.log("req body from post route", req.body)
  const user_id = req.cookies.user_id;
  const uid = req.body.uid;
  const title = req.body.title;
  const latitude = req.body.center_latitude
  const longitude = req.body.center_longitude
  const zoom_level = req.body.zoom_level
  let mapData = {user_id: user_id, uid: uid, title: title, center_latitude: latitude, center_longitude: longitude, zoom_level: zoom_level}
  mapQueries.createMap(mapData)
  .then((map) => {

    res.json(map)
  }).catch((err)=>{
    console.log("There was an error creating the map")
  })

});

//I think I might have a conflict with routes if I dont' change the url

// router.post('/', (req, res)=> {
//   console.log(post to favourites)
// })

//edit/update map
//Jeremy - I had this debate with myself if it would be get or post or a combo>
//like, you have to retrieve the map but also update it....
// router.post('/:id', (req, res) => {
//   //unclear if this should use req.params or req.body
//   //this article seems to suggest anytingt aht is :name is req.params
//   //return res.json({ params: req.params, body: req.body });
//   const mapData = [req.body.user_id, req.body.uid, req.body.title, req.body.center_longitude, req.body.center_latitude];
//   //console.log(mapData);
//   mapQueries.createMap(mapData)
//     .then((map) => {
//       res.json({ map });
//     })
//     .catch((err)=>{
//       console.log("create map route error: ", err)
//     })

//   //do not pass req.params or req.body, pass the indvidual strings, pass each param as a string
//   //pull map in question
//   //make an update query
// });

router.post('/create', (req, res) =>{
  // const title = req.body.title;
  const title = "my title"
  const latitude = req.body.latitude
  const longitude = req.body.longitude
  let mapData = {title: title, latitude: latitude, longitude: longitude}
  mapQueries.createMap(mapData)
  .then((map) => {
    res.json(map)//will this correctly convert the returned sql rows to json?
  }).catch((err)=>{
    console.log("There was an error creating the map")
  })

}) //end post route

//map edit put route

router.put('/edit', (req, res)=>{

  let dataForQuery = {}

  //confirm if we need the uid in an update statement when NOT NULL constraint
  dataForQuery['title'] = req.body.title
  dataForQuery['center_latitude'] = req.body.center_latitude
  dataForQuery['center_longitude'] = req.body.center_longitude
  dataForQuery['zoom_level'] = req.body.zoom_level
  //call edit map
  mapQueries.editMap()
})


// Read one GET
//get a specific map?
//Jeremy (based on map id?)

//router.get()



// Update POST

// DELETE POST



module.exports = router;
