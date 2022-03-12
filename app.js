var db = require("./db")
var express = require('express');
var app = express();
var mysql = require('mysql');
var parser = require('body-parser');

var rout = express.Router();
var path = require('path');

// db.query("INSERT INTO accounts (username, password) VALUES ('KDname', 'KDpass');")

app.use(express.static(path.join(__dirname, 'Website')));
app.listen(5500, () => console.log("jYes Yeah"));
