const express = require('express');
const router = express.Router();
const Promise = require('bluebird')

const models = require('../models')
const Post = models.Post;
const User = models.User;

// find all posts with specific tag
router.get('/:tag', function(req, res, next){
  // pages is a an array of promises of pages
  Post.findAll({
    where : {
      tags: { $overlap: [req.params.tag] } // $overlap matches a set of possibilities
    },
    include: [User]
  })
  .then(function(posts) {
    res.render('index', {
      posts: posts
    });
  })
  .catch(next);
});

module.exports = router;
