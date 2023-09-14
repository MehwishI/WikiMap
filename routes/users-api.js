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
  //I think we might need a post login route too>
  ///also unclear if we need to call a query at this point
  //like to pull the users maps or the users favourites

  //tiny app uses a post request first

  if(req.session.userID) {
    return res.redirect("/")
  }
})


router.post('/login/:id'){
  //const id = req.body.id
  //call query to query id from database?
  //if id present?
  //redirect, and call query for maps?

module.exports = router;
