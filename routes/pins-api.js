/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const db = require('../db/connection');

//put in seperate file api/pins file
router.get('/:mapid', (req, res) => {
  //testing route (Gary)
  //
  return res.json({params: req.params, body: req.body});

  //is it supposed to be req.mapid=? req.params.mapid?
  mapQueries.getPinsByMapId(req.params.mapid)
    .then((maps) => {
      res.json({ maps });
    });
});


module.exports = router;
