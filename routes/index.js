const express = require('express');
const router = express.Router();

const chalk = require('chalk');

router.use('/stylesheets', express.static('public/stylesheets'))

router.use('/', function(req, res, next){
	console.log(chalk.cyan('Hello there'))
	next();
})

//Dear Jean, should we ever make an API that sends women across the series of tubes
//that is the internet, or something... here is how one might send some JSON.
//Yours, Claire
//PS This is what Zeke added, and while it's not immediately pertinent, I thought
//that you might be into it.
// router.get('/', function(req, res, next){
// 	res.json({
// 		foo: 'bar'
// 	})
// });


router.get('/', function(req,res,next){
	res.render('index')
})

router.get('/posts', function(req, res, next){
	res.render('post')
})

router.get('/posts/create', function(req, res, next){
	res.render('post')
})

router.get('/about', function(req, res, next){
	res.render('about')
})

module.exports = router;
