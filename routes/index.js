//Renders ejs templates (client's view)

const express = require("express");
const router = express.Router();
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

router.get("/", (req, res) => {
  res.render("index", { apiKey }); // Pass the google API key to the maps.ejs template
});

router.get("/create", (req, res) => {
  // app.get('/login/:id', (req, res) => {
  //   res.cookie('user_id', req.params.id);
  //   return res.redirect("/")
  //   });
  const id = req.cookies.id;
  //const userID = req.session.userID; //edit this, we are not using session, refer to login route
  //pass the api key to the render
  res.render('/', { apiKey });
  //res.json({apiKey})
});

/////////////------Copying from script/locs.js----

////////////
module.exports = router;
