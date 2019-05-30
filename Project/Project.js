var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.get('/home',function(req,res){
  res.render('index', function (err, html) {
		res.send(html);
	});
});

app.get('/contact-me',function(req,res){
  res.render('contact-me', function (err, html) {
		res.send(html);
	});
});

app.get('/commissions',function(req,res){
	res.render('commissions', function (err, html) {
		res.send(html);
	});
});

app.get('/about-me',function(req,res){
	res.render('about-me', function (err, html) {
		res.send(html);
	});
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
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});