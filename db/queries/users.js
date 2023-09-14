const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;//jn returning an array of objects
    });
};

module.exports = { getUsers };
