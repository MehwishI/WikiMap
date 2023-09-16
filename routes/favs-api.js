const express = require('express');
const router  = express.Router();
const favQueries = require('../db/queries/favourites');


// GET a list of all favourites of a user
router.get('/', (req, res) => {
  favQueries.getFavourites()
  .then((favourites)=>{
    res.json({ favourites });
  })

});

// Allows authenticated users to favourite a map
router.post('/favourites', (req, res) => {
  // if (req.session.user_id) {
  //   res.send ('User is logged in!')
  // }
  
  //Extract user_id and map_id from the request
  const { user_id, map_id } = req.body;
})





module.exports = router;
