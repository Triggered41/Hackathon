var db = require("./db")
var express = require('express');
var app = express();
var mysql = require('mysql');
var parser = require('body-parser');
var path = require('path');

app.use(parser.urlencoded({extended: false}))

app.post('/submit', (req, res) =>{
    // req.body.ale
    // can_login(req);
    res.sendFile(path.join(__dirname, "./Website/html/table.html"))
})

app.use(express.static(path.join(__dirname, 'Website')));
app.listen(3100, () => console.log("jYes Yeah"));


function can_login(req)
{
    var det = db.query("SELECT * FROM accounts WHERE username=? AND password=?;", [req.body.username, req.body.psw], (err, result) =>{
        console.log(result[0].username)
    })
    // if (det.length == 2) {
        
    // }
    // db.query("INSERT INTO accounts (username, password) VALUES (?, ?)", [req.body.username, req.body.psw] )
}

function acc_register(req)
{

    // var body = req.body;
    // if (body.pws == body.confirm_psw)
    // var details = db.query("INSERY INTO accounts VALUES (?, ?, ?, ?, ?)",
    // [body.username, body.email, body.number ,body.psw, body, confirm_psw]);    
}