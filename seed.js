const db = require('../server/db');
const Promise = require('sequelize')
  .Promise;

//Users returns an array of users instances which we will save to the database.
const users = require('./users');

function seedUsers() {
  const creatingUsers = users.map(userObj => db.model('user')
    .create(userObj));

  return Promise.all(creatingUsers);
}

module.exports = (() => db.sync({ force: true })
  .then(() => seedUsers())
  .then(() => console.log('Seed successful!'))
  .catch(console.error))();

