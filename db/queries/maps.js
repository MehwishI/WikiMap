const db = require('../connection');

const getMaps = () => {
  return db.query(`SELECT *
  FROM maps
  `)
    .then(data => {
      return data.rows;//jn returning an array of objects
    });
};



//used by /api/pins/:mapid
const getPinsByMapId = (id) => {
  //is this a pool query?
  return db.query(`SELECT * FROM locations
  WHERE id = locations.id`, [])
    .then(data => {
      return data.rows;
    });
};


const getMapById = (id) => {
  return db.query(`SELECT * FROM maps
  WHERE maps.id = id`)
  .then(data => {
    return data.rows;
  })
};
//

//POST REQUESTS
const createMap = (paramsObj) => {
  console.log("logging paramsObject in create map", paramsObj)
  //may have to adjuste params depending on how we choose to post (form, etc)
  //note the user id in the cookie is coming from the post route...or last least I think it is
  console.log("create maps trigged, and user id is: ", paramsObj.user_id);
  let data =[paramsObj.user_id, paramsObj.uid, paramsObj.title, paramsObj.center_latitude, paramsObj.center_longitude, paramsObj.zoom_level]
  return db.query(`INSERT INTO maps (user_id, uid, title, center_latitude, center_longitude, zoom_level)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *`, data)
  .then((data) => {
    return data.rows[0]
  })
  .catch((err) => {
    console.log("create map error message: ", err)
  });

};

const editMap = (paramsObj => {
  let data =[paramsObj.id, paramsObj.user_id, paramsObj.uid, paramsObj.title, paramsObj.center_latitude, paramsObj.center_longitude, paramsObj.zoom_level]
  console.log("edit maps query function triggered")
  //not updating map id, user_id, or uid
  return db.query(`UPDATE title, center_latitude, center_longitude, zoom-level)
  VALUES($1, $2, $3, $4)
  WHERE paramsObj.id =${paramsObj.id}
  RETURNING *`, data,)
  .then((response)=>{
    return response.rows[0]
  })
  .catch((err) => {
    console.log("edit map error messsage: ", err)
  })
})

module.exports = { getMaps, getPinsByMapId,getMapById, createMap, editMap };
