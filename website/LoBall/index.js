var express = require('express');
var app = express();


app.get('/',function(req,res){
	
	return res.redirect('/public/index.html');

});

app.use('/public', express.static(__dirname + '/public'));



app.listen(3003,function(){
	console.log('App listening on port 3003!');
});