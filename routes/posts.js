const express = require('express');
const router = express.Router();
const Promise = require('bluebird')

const models = require('../models')
const Post = models.Post;
const User = models.User;

// router.get('/:id', function(req, res, next){
// 	res.render('post')
// })

router.get('/create', function(req, res, next){
	res.render('add-post')
})

router.post('/create', function(req, res, next){
	let userPromise = User.findOrCreate({
    where: {
      username: req.body.username
    }
  })

  let postPromise = Post.create({
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags
  })

  Promise.all([userPromise, postPromise])
  .spread(function (user, post) {
  	console.log('post', post)
    return post.addUser(user[0]);
  })
  .then(function (createdPost) {
  	console.log('CREATED POST', createdPost[0][0])
    res.redirect('/post/' + createdPost[0][0].postId);
  })
  .catch(next);
})

router.get('/:id', function(req, res, next){
	Post.findOne({
    where: {
      id: req.params.id
    }
    /* includes runs a join and gives us .user
     * so this is an alternative to doing post.getUser
     * separately */
    // includes: [
    //     { model: User, as: 'user' }
    // ]
  })
  .then(function (post) {
	  if (post === null) {
	    var error = new Error('That post was not found!');
	    error.status = 404;
	    return next(error);
	  }
	  console.log(post);
	  return post.getUsers()
    .then(function (username) { // Nested .then so we can remember `post`
      post.username = username;
      res.render('post', {
        post: post
      });
    });
  })
  .catch(next);
	// res.render('post')
})

module.exports = router