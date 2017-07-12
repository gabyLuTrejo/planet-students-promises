var express = require("express");
var path = require('path');
var app = express();

app.use('/data',express.static(path.join(__dirname,'data')));

app.get('/', function(require, response){
	response.sendFile(__dirname+'/index.html');
});

app.listen(8080);