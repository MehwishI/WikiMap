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
  const queryString = `
  SELECT locations.*, maps.center_latitude, maps.center_longitude
  FROM locations
  JOIN maps ON locations.map_id = maps.id
  WHERE locations.map_id = $1;`
  return db
    .query(queryString,[mapid])
    .then((data) => {
      return data.rows;
    });
};


//addToLocations (inbound from create map embeded post request)
const addLocations = (dataAsObj) => {

  

}


module.exports = { getLocations, getLocsByMapId };

