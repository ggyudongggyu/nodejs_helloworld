var express = require('express');
var app = express(); //express를 실행하여 app object를 초기화 합니다.

app.get('/', function(req,res){
  res.send('Hello world!');
});

var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:' + port);
});
