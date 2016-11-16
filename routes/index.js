const express = require('express');
const router = express.Router();
const chalk = require('chalk');

const models = require('../models')
const Post = models.Post;
const User = models.User;

const aboutRouter = require('./about.js')
const postsRouter = require('./posts.js')
const usersRouter = require('./users.js')

router.use('/about', aboutRouter);
router.use('/post', postsRouter);
router.use('/user', usersRouter);

router.use('/', function(req, res, next){
	console.log(chalk.cyan("I'm routing you from routes/index.js"))
	next();
})

router.get('/', function(req,res,next){
	Post.findAll({})
    .then(function (posts) {
      res.render('index', {
        posts: posts
      });
    })
    .catch(next);
})

module.exports = router;
