const db = require('../connection');

const getMaps = () => {
  return db.query(`SELECT * from maps
  LEFT JOIN locations
  ON maps.id = locations.map_id;`)
    .then(data => {
      return data.rows;//jn returning an array of objects
    });
};

//used by /api/pins/:mapid
const getPinsByMapId = (id) => {
  return db.query(`SELECT * FROM locations
  WHERE id = locations.id`)
}
//

module.exports = { getMaps };
