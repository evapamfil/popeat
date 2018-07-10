var express = require('express');
var router = express.Router();
var stripe = require("stripe")("sk_test_nPvAOmyrTFKVGL8GYhCH6INV");

var database = require('../services/database');
// var validator = require('../services/validator');

router.post('/paiement', function (req, res, next) {
    stripe.customers.create({
        email: req.body.mailUser,
        source: req.body.payment.id
    })
        .then(customer =>
            stripe.charges.create({
                amount: (req.body.amount) * 100,
                description: "Sample Charge",
                currency: "eur",
                customer: customer.id
            }))
        .then((response) => {
            console.log(response)
            var userId = req.body.idUser;
            var panier = req.body.panier;
            var prix = (response.amount) / 100;
            if (response.status == 'succeeded') {
                var paiement = "succed"
                database.sendQuery(`INSERT INTO commandes (price, user_id, paiement) VALUES ('${prix}', '${userId}', '(${paiement})')`, function (err, result) {
                    if (err) {
                        console.log(err)
                        next(err);
                    } else {
                        res.json({
                            status: 'ok'
                        });
                    }
                })
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


router.get('/liste', function (req, res, next) {
    var user = req.session.user;
    var userId = req.session.user.id
    if (!user) {
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


