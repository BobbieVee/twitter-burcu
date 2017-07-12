var express = require('express');
var chalk = require('chalk');
var morgan = require('morgan');
var nunjucks = require('nunjucks');

var app = express();


var port = 3000 || process.env.PORT;

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true });

app.use(morgan('combined'));

app.get('/', function(req, res, next){
	res.render('index', {title: 'Hall of Fame', people: people})
});

app.use(function(req, res, next){
	res.send('you idiot')
});

app.listen(3000, function(){
	console.log(chalk.blue(`Listening intently on port ${port}`));
});