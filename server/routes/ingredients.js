var express = require('express');
var router = express.Router();

var database = require('../services/database');
// var validator = require('../services/validator');

router.post('/add', function(req, res, next) {

    var name = req.body.name;
    var qty = req.body.qty;
    // ...

    //TODO validate input

    database.sendQuery(`INSERT INTO ingredient (name) VALUES ('${name}')`, function(err, cities) {
        if (err) {
            next(err);
        } else {
            res.json({
                status: 'ok',
                ingredient: {
                    name,
                }
            });
        }
    })
});


router.get('/list', function(req, res, next) {
    database.sendQuery(`SELECT * FROM ingredient`, (err, ingredients) => {
        if (err) {
            next(err);
        } else {
            res.json({
                status: 'ok',
                ingredients,
            });
        }
    })
});

module.exports = router;
