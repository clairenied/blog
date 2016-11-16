const express = require('express');
const app = express();

const morgan = require('morgan');
const nunjucks = require('nunjucks');

const bodyParser = require('body-parser');
const routes = require('./routes/');

const models = require('./models')

app.use(morgan('tiny'));

// body parser for form input
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// view engine information for nunjucks
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

// static thing belongs here and not in index.js, I think?
app.use('/stylesheets', express.static('public/stylesheets'))


models.blogDb.sync()
.then(function () {
  app.listen(3000, function () {
      console.log('Server is listening on port 3000');
  });
})
.catch(console.error);

app.use('/', routes); // THIS IS WHAT WAS MISSING
