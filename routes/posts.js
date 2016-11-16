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
	res.render('add-post');
});

router.post('/create', function(req, res, next){
	let userPromise = User.findOrCreate({
    where: {
      username: req.body.username
    }
  });

  let postPromise = Post.create({
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags
  });

  Promise.all([userPromise, postPromise])
  .spread(function (user, post) {
    return post.addUser(user[0]);
  })
  .then(function (createdPost) {
    console.log('CREATED POST', createdPost[0][0]);
    res.redirect('/post/' + createdPost[0][0].postId);
  })
  .catch(next);
});

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
  .then(function (data) {
	  // if (data === null) {
	  //   var error = new Error('That post was not found!');
	  //   error.status = 404;
	  //   return next(error);
	  // }
    req.post = data;
	  return data.getUsers()
  })
  .then(function (users) { // Don't need to nest because we saved data as req.post
      res.render('post', {
        post: req.post,
        user: users[0], // bc 'users' is an array of users
      });
  })
  .catch(next);
	// res.render('post')
})

module.exports = router;
