var express = require('express');
var router = express.Router();

var database = require('../services/database');
// var validator = require('../services/validator');

router.get('/liste', function (req, res, next) {
    var user = req.session.user;
    var userId = req.session.user.id
    if(!user){
        req.sendStatus(403)
    } else {
        database.sendQuery(`SELECT * FROM commandes WHERE user_id = ${userId}`, function (err, commandes) {
            if (err) {
                next(err);
            } else {
                res.json({
                    status: 'ok',
                    commandes,
                });
            }
        })
    }
})
module.exports = router;


