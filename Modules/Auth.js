
const db = require('../db/db.json');
let cookieParser = require("cookie-parser");
const Usuarios = require("../Model/Usuarios");


async function teste(req,res,next) {
    var email = req.body.email;
    var senha = req.body.password;

    const user = await Usuarios.findOne({ where: { email } });

    if (user) {
        if (senha === user.senha ) {
            console.log('senha bate')
            res.cookie('Logado', user, { maxAge: 100000 });
            next();
        } else {
            console.log('senha errada')
            res.redirect('/login')
        }
    } else {
        res.render('Usuarios não encontrado')
    }
}

module.exports = teste;