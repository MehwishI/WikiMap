const db = require('../connection');

const getLocations = () => {
  return db.query(`SELECT * from locations;`)
    .then(data => {
      return data.rows;//jn returning an array of objects
    });
};

//used by /api/pins/:mapid
const getLocsByMapId = (id) => {
  return db.query(`SELECT * from locations
  where locations.map_id = id;`)
  .then(data => {
    return data.rows;
  })
}



module.exports = { getLocations,getLocsByMapId };
