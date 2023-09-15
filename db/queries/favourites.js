const db = require('../connection');

const getFavourites = () => {
  return db.query(`SELECT
  favourites.user_id,
  maps.uid,
  locations.title AS location_title,
  locations.description,
  locations.longitude,
  locations.latitude
FROM
  favourites
JOIN
  maps ON maps.id = favourites.map_id
JOIN
  locations ON maps.id = locations.map_id;`)
    .then(data => {
      return data.rows;//jn returning an array of objects
    });
};

module.exports = { getFavourites };
