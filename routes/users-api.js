/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');


// Gets the list of users from the database - just an example
router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
      console.log(users)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


// Lets user login and redirects to homepage
router.get('/login/:id', (req, res) => {

  res.cookie('user_id', req.params.id);
  return res.redirect("/")
});



module.exports = router;

