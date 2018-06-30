var express = require('express');
var router = express.Router();

var database = require('../services/database');
// var validator = require('../services/validator');

router.get('/liste', function (req, res, next) {
    database.sendQuery(`SELECT * FROM products`, function (err, products) {
        if (err) {
            next(err);
        } else {
            res.json({
                status: 'ok',
                products,
            });
        }
    })
})
module.exports = router;


