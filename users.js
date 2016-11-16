'use strict'; // eslint-disable-line

// const chance = require('chance')(123); // eslint-disable-line

// const numUsers = 22;
// const emails = chance.unique(chance.email, numUsers);

// // // generate a single random user obj
// // function randUser() {
// //   return {
// //     email: emails.pop(),
// //     password: chance.word(),
// //     isAdmin: chance.weighted([true, false], [5, 95]),
// //   };
// // }

// create array of 100 users: 2 known, 98 random
const buildUsers = () => {
  // 2 known users
  const users = [{
    firstName: 'Jean',
    lastName: 'Chung',
    pictureUrl: 'http://i.imgur.com/bI1zf2b.jpg',
    username: 'jeanbean',
    mail: 'jean@jean.com'
  }, {
    firstName: 'Claire',
    lastName: 'Niederberger',
    pictureUrl: 'http://i.imgur.com/1uTV9v2.jpg',
    username: 'clairebear',
    mail: 'claire@claire.com'
  }];

  // // 98 random users
  // for (let i = 0; i < numUsers; i += 1) {
  //   users.push(randUser());
  // }

  return users;
};

module.exports = (() => buildUsers())();

