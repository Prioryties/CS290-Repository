var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 9049);

app.get('/home',function(req,res){
  res.render('home');
});

app.get('/contact-me',function(req,res){
  res.render('contact-me');
});

app.get('/commissions',function(req,res){
	res.render('commissions');
});

app.get('/about-me',function(req,res){
	res.render('about-me');
});

app.use(function(req,res){
  res.status(404);
  res.render('404')
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on flip3.engr.oregonstate.edu:9049/' + app.get('port') + '; press Ctrl-C to terminate.');
});