const db = require('../models').blogDb;
const Promise = require('sequelize')
  .Promise;

const users = require('./users');
const posts = require('./posts');

function seedUsersAndPosts() {
  // creatingUsers is an ARRAY of promises to create users
  const creatingUsers = users.map(function(userObj) {
    return db.model('user') // db.model returns a promise
    .create(userObj);
  });
  // creatingPosts is an ARRAY of promises, each which will create a post
  const creatingPosts = posts.map(userObj => db.model('post')
    .create(userObj));

  return Promise.all([Promise.all(creatingUsers), Promise.all(creatingPosts)]);
}

// takes an array of users and randomly returns one of the users
function getRandomUser(userArr) {
  let idx = Math.floor(Math.random() * userArr.length);
  return userArr[idx];
}

let seedTheDatabase = function() {
  return db.sync({ force: true })
  .then(() => seedUsersAndPosts())
  .spread(function(allUsers, allPosts) { //allUsers = array of users; allPosts = array of posts
    let linkingArray = allPosts.map(function(post) {
      // gets one random user
      let currUser = getRandomUser(allUsers);
      return post.addUser(currUser);
    });
    return Promise.all(linkingArray);
  })
  .then(() => console.log('Seed successful!'))
  .catch(console.error);
};

module.exports = seedTheDatabase;
