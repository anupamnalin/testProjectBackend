const express = require('express')
const debug = require('debug')('app:server')
var bodyParser = require('body-parser');


app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true }));

app.get('/',function(req, res){
  console.log("/ route called ");
  res.sendStatus(200)
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err)
});

module.exports = app
