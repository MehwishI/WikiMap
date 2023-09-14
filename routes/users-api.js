/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const app = express()
const router  = express.Router();
const userQueries = require('../db/queries/users');

const cookieSession = require('cookie-session')

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key']
}));

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/login/:id', (req, res) => {
  //notes by Jeremy:
  //are we simply taking the user id (from <input field> id on partial (we will have to add this)
  //and then querying the datbase??? if it exists
  ///then if so, we call a query for the relevant maps/favourites
  //then redirect user to main page
  //load maps on relevant view/pager using ajax calls



  if(req.session.userID) {
    return res.redirect("/")
  }
})


module.exports = router;
