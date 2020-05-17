var express = require('express');
var request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var router = express.Router();

// Index of scrapping route
router.get('/', function (req, res) {
    request('https://www.folhomee.fr', function (error, response, html) {
        if (!error && response.statusCode == 200) {
            //Use of JSDOM to get the content of the meta tag 'google-site-verification'
            const root = new JSDOM(html);
            const document = root.window.document;
            const content = document.querySelector("meta[name='google-site-verification'").getAttribute('content');
            res.send(content);
        }
        else {
            res.json( { Message: "An error occured", error });
        }
    });
});

module.exports = router;