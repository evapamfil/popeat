var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

var database = require('../services/database');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function (req, res, next) {
  res.json('HELLO');
})
router.post('/register', function (req, res, next) {
    var users = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        mail : req.body.mail,
        password : req.body.password,
        adresse : req.body.adresse,
        ville : req.body.ville,
        code_postal : req.body.code_postal
    }
    console.log(users)

    var pass = bcrypt.hashSync(users.password, 10);

    database.sendQuery(`INSERT INTO users (firstname, lastname, mail, password, adresse, ville, code_postal) VALUES ('${users.firstname}', '${users.lastname}', '${users.mail}', '${pass}', '${users.adresse}', '${users.ville}', '${users.code_postal}')`, function(err, user){
        if (err) {
            console.log(err)
            next(err);
        } else {
            req.session.user = {
                id : user.insertId
            };
            res.json({
                status: 'ok'
            });
        }
    })
})
router.post('/connexion',  function (req, res, next){
    var mail = req.body.mail;
    var password = req.body.password;
    database.sendQuery(`SELECT * FROM users WHERE mail LIKE '${mail}'`, function(err, co){
        var plainPassword = password;
        var cryptPassword ;

        if (err) {
            console.log(err)
        }
        else {
            if(co.length > 0){
                cryptPassword = co[0].password
                bcrypt.compare(plainPassword, cryptPassword, function(err, res) {
                    if(res == true){
                        console.log('vous etes connecter')
                        var session = req.session
                        session.idUser = co[0].id
                        console.log(session)
                    }
                });
            }
            console.log(co)
        }
    })


})
router.get('/deconnexion', function (req, res, next){
    if(req.session){
        req.session.destroy(function (err){
            if(err){
                console.log(err)
            }
            else{
                console.log('vous etes bien deconnecter')
            }

        })
        console.log(req.session)
    }
})


module.exports = router;


