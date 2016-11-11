const express = require('express')
const router = express.Router()

const chalk = require('chalk')

router.use('/stylesheets', express.static('public/stylesheets'))

// router.use('/', function(req, res, next){
// 	console.log(chalk.cyan('Hello there'))
// })

module.exports = function(){

	router.get('/', function(req, res, next){
		res.render('index')
	})

	// router.get('/posts', function(req, res, next){
	// 	res.render('post')
	// })

	// router.get('/posts/create', function(req, res, next){
	// 	res.render('post')
	// })

	// router.get('/about', function(req, res, next){
	// 	res.render('about')
	// })

	return router
}
