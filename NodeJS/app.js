const express = require('express');
var bodyParser = require('body-parser');
var scrapping = require('./api/scrapping');
var auth = require('./api/auth');
//var cors = require('cors')
const app = express();

//app.use(cors())
// this will help us to read POST data.
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const port = process.env.PORT | 3001;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/scrapping', scrapping);
app.use('/auth', auth);

// this is default in case of unmatched routes
app.use(function(req, res) {
// Invalid request
    res.json({
        error: {
            'name':'Error',
            'status':404,
            'message':'Invalid Request',
            'statusCode':404,
            'stack':`http://localhost:${port}/`
        },
        message: 'Testing!'
    });
});

// On lance le serveur
app.listen(port, function() {
    console.log(`Folhomee node server listening at http://localhost:${port}`)
});