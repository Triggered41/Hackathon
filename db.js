var mysql = require('mysql');
var parser = require('body-parser');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "hackathon"
});

connection.connect(function(error){
    if (error) throw error
    else {
        console.log("Connected")
    }
})

module.exports = connection;