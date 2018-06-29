var express = require('express');
var router = express.Router();

var database = require('../services/database');
// var validator = require('../services/validator');

router.post('/add', function(req, res, next) {

    var name = req.body.name;
    // ...

    //TODO validate input

    database.sendQuery(`INSERT INTO recette (name) VALUES ('${name}')`, function(err, cities) {
        if (err) {
            next(err);
        } else {
            res.json({
                status: 'ok',
                recette: {
                    name,
                }
            });
        }
    })
});

router.post('/add-ingredient', function(req, res, next) {

    var recetteId = req.body.recette_id;
    var ingredientId = req.body.ingredient_id;
    var qty = req.body.qty;
    // ...

    //TODO validate input

    database.sendQuery(`INSERT INTO recette_ingredient (recette_id, ingredient_id, qty) VALUES ('${recetteId}', '${ingredientId}', ${qty})`, function(err, cities) {
        if (err) {
            next(err);
        } else {
            res.json({
                status: 'ok',
                recette_ingredient: {
                    recetteId,
                    ingredientId,
                    qty
                }
            });
        }
    })
});

router.get('/list', function(req, res, next) {
    database.sendQuery(`SELECT * FROM recette`, (err, recettes) => {
        if (err) {
            next(err);
        } else {
            res.json({
                status: 'ok',
                recettes,
            });
        }
    })
});

router.get('/list-with-ingredient', function(req, res, next) {
    database.sendQuery(`SELECT r.id AS recId, r.name AS rName, i.id AS ingId, i.name AS iName, ri.qty AS iQty FROM recette_ingredient ri LEFT JOIN recette r ON r.id = ri.recette_id LEFT JOIN ingredient i ON i.id = ri.ingredient_id`, (err, recettes) => {
        if (err) {
            next(err);
        } else {
            var recettesFormated = {};

            recettes.forEach((r) => {
                if (recettesFormated[r.recId] === undefined) {
                    recettesFormated[r.recId] = {
                        id: r.recId,
                        name: r.rName,
                        ingredients: [],
                    }
                }

                recettesFormated[r.recId].ingredients.push({
                    id: r.ingId,
                    name: r.iName,
                    qty: r.iQty
                });
            })

            res.json({
                status: 'ok',
                recettes: Object.keys(recettesFormated).map((k) => recettesFormated[k]),
            });
        }
    })
});

module.exports = router;
