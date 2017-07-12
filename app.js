var express = require('express');
var app = express();
var chalk = require('chalk');

var port = 3000 || process.env.PORT;

app.use(function(req, res, next){
	console.log( chalk.green(`Time: ${Date()} ${req.method} '${req.originalUrl}'`));
	next();	
})

app.get('/', function(req, res, next){
	res.send('hello')
})

app.use(function(req, res, next){
	res.send('you idiot')
})

app.listen(3000, function(){
	console.log(chalk.blue(`Listening intently on port ${port}`));
})