/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const app = express();
const router  = express.Router();
const userQueries = require('../db/queries/users');

// const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser');

app.use(cookieParser());

// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key']
// }));

router.get('/', (req, res) => { // Comments from Rose: shouldn't we be using the app.get here for the homepage? Also, do we actually need this block of code since we are already inserted our users-api.js file path in the server.js which typically runs the homepage after require express and app configs?
  userQueries.getUsers()
    .then(users => {
      console.log(users)
      res.json({ users });
      console.log(users)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/login/:id', (req, res) => { // Comments from Rose: Again wondering why it's not an app.get here. Also, If we're using user_id below in the params, shouldn't we use the same here /login/:user_id?

  res.cookie('user_id', req.params.id);

  //notes by Jeremy:
  //are we simply taking the user id (from <input field> id on partial (we will have to add this)
  //and then querying the datbase??? if it exists
  ///then if so, we call a query for the relevant maps/favourites
  //And set cookie
  //then redirect user to main page
  //load maps on relevant view/pager using ajax calls

  //


  return res.redirect("/")
});



module.exports = router;

