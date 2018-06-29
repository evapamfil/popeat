var express = require('express');
var router = express.Router();
var path = require ('path');

var database = require('../services/database');

/* GET home page. */
router.get('/', function(req, res, next) {

    res.sendFile(path.resolve(__dirname + '/../public/index.html'));

    // database.sendQuery('SELECT * FROM city', function(err, cities) {
    //     if (err) {
    //         next(err);
    //     } else {
    //         database.sendQuery('SELECT * FROM country', function(err, countries) {
    //             if (err) {
    //                 next(err);
    //             } else {
    //                 res.json({
    //                     cities: cities,
    //                     countries: countries
    //                 });
    //             }
    //         })
    //     }
    // })

    // res.json({});

/*    if (req.session.page_views) {
        req.session.page_views++;
        res.send("You visited this page " + req.session.page_views + " times");
    } else {
        req.session.page_views = 1;
        res.send("Welcome to this page for the first time!");
    }*/
});

/* GET home page. */
router.get('/list', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.json([{
        name: 'nom'
    }, {
        name: 'nom2'
    }])
});

router.get('/post', function(req, res, next) {
    res.render('form');
});

router.post('/post', function(req, res, next) {
    res.json(req.body);
});

module.exports = router;
