var express = require('express');
var app = express();
var mysql = require('mysql');
var parser = require('body-parser');

var path = require('path');

var indJS = require("./Website/JS/index");
const { error } = require('console');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "hackathon"
});

connection.connect(function(error){
    if (error) throw error
    else {
        var acc = connection.query("INSERT INTO accounts (username, password) VALUES ('vhuser', 'vhpass');")
        console.log("Connected")
    }
})


app.use(express.static(path.join(__dirname, 'Website')));
app.listen(5500, () => console.log("jYes Yeah"));
