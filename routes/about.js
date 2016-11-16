const express = require('express');
const router = express.Router();

const models = require('../models')
const Post = models.Post;
const User = models.User;

router.get('/', function(req, res, next){
	res.render('about')
})

module.exports = router