const db = require("../connection");

const getLocations = () => {
  return db.query(`SELECT * from locations;`).then((data) => {
    return data.rows; //jn returning an array of objects
  });
};

//used by /api/locs/:mapid
//this needs to be updated once maps table has lat and long , so those will be captured and pass it with query
//result
//query modified by mehwish
const getLocsByMapId = (mapid) => {
  const queryString = `
  SELECT locations.*,
  maps.center_latitude as center_latitude,
  maps.center_longitude as center_longitude
  FROM locations
  JOIN maps ON locations.map_id = maps.id
  WHERE locations.map_id = $1;`;
  return db.query(queryString, [mapid]).then((data) => {
    return data.rows;
  });
};

//module.exports = { getLocations, getLocsByMapId };
//   return db
//     .query(queryString, [mapid])
//     .then((data) => {
//       return data.rows;
//     });
// };


//addToLocations (inbound from create map embeded post request)
const addLocations = (dataObj) => {

  //pre-emptive debugging
  console.log("query file, add locations function triggered")
  console.log("dataObject received", dataObj)

  let data = [dataObj.title, dataObj.description, dataObj.map_id, dataObj.latitude, dataObj.longitude]
  return db.query(`INSERT INTO locations (title, description, map_id, latitude, longitude)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *`, data)
  .then(data => {
    return data.rows[0]
  })
  .catch((err)=> {
    console.log("insert query error msg: ", err)
  })


};


module.exports = { getLocations, getLocsByMapId, addLocations };

