const express = require('express')
const debug = require('debug')('app:server')
var bodyParser = require('body-parser');
const app = express()

var responseData = [
        {
        "Name": "Moets Curry Leaf",
        "menu": {
          "dish": "Noodle Soup",
          "description": "Boiled noodle served in a pot with broth",
          "price": 2.99
          }
        },
        {
          "Name": "Cafe 5h by the Kitchen",
          "menu":[
          {
            "dish": "Veg Mixed Fried Rice",
            "description": "Boiled noodle served in a pot with broth",
            "price": 10.00,
          },
          {
            "dish": "Paneer Tikka",
            "description": "Boiled noodle served in a pot with broth",
            "price": 5.99,
          }
        ]
      }
    ]


app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true }));

app.get('/',function(req, res){
  console.log("/ route called ");
  res.sendStatus(200)
})

app.get('/get_resturant_data',function(req, res){
  res.json({
    resturants: responseData
  })
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err)
});

module.exports = app
