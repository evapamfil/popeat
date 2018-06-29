var express = require('express');
var router = express.Router();

var database = require('../services/database');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function (req, res, next) {

    var name = req.body.name;
    database.sendQuery(`INSERT INTO users (name) VALUES ('${name}')`, function(err, user){
        if (err) {
            next(err);
        } else {
            req.session.user = {
                name,
                id : user.insertId
            };

            res.json({
                status: 'ok',
                user: {
                    name,
                },
            });
        }
    })
})
module.exports = router;


