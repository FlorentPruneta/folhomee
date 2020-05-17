var express = require('express');
var request = require("request");
const users = require("../database/users");
var router = express.Router();


/**
 * Try to retrieve the user from his login and test his password.
 * The users database if full of user with unique login.
 */
router.post('/', function (req, res) {
    console.debug("req", req)
    var login = req.body.login;
    var password = req.body.password;
    console.debug("login", login);
    console.debug("password", password)
    const usersArray = JSON.parse(JSON.stringify(users));
    const retrievedUser = usersArray.find(u => u.login === login);
    if(!retrievedUser) {
        res.json({ "access": false })
    }
    else {
        if(retrievedUser.password === password) { res.json({ "access": true })}
        else { res.json({ "access": false })}
    }
});

module.exports = router;