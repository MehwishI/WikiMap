const db = require("../connection");

const getLocations = () => {
  return db.query(`SELECT * from locations;`).then((data) => {
    return data.rows; //jn returning an array of objects
  });
};

//used by /api/locs/:mapid
//this needs to be updated once maps table has lat and long , so those will be captured and pass it with query
//result
const getLocsByMapId = (mapid) => {
  return db
    .query(
      `SELECT * from locations
  where locations.map_id = $1;`,
      [mapid]
    )
    .then((data) => {
      return data.rows;
    });
};

module.exports = { getLocations, getLocsByMapId };
