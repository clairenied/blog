const express = require('express')
const app = express()

const morgan = require('morgan')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')

const routes = require('./routes')

app.use(morgan('tiny'))

// body parser for form input
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// view engine information for nunjucks
app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', { noCache: true })

app.listen(3000)