const express = require('express');
const router = express.Router();

const models = require('../models')
const Post = models.Post;
const User = models.User;

// get all posts of one user
router.get('/:username', function(req, res, next) {
  let user;
  User.findOne({
    where: {username: req.params.username}
  })
  .then(function(author) {
    user = author;
    return user.getPosts();
  })
  .then(function(posts) {
    console.log('first post:', posts[0]);
    res.render('index', {
      posts: posts,
      user: user
    });
  })
  .catch(next);
});

module.exports = router;
