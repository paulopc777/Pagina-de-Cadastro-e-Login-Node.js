const db = require('../db/user.json');
var LocalStrategy = require('passport-local');
var passport = require('passport');


module.exports = function(passport){
const al = JSON.stringify(db)
const users = JSON.parse(al).usuarios;
console.log(users)

passport.use(new LocalStrategy(function verify(email, senha, cb) {

    //const login = users.find(usuarios => usuarios.email === email && usuarios.senha === senha)

    //console.logo(login)
    if(users.find(usuarios => usuarios.email === email && usuarios.senha === senha)){
        return cb(null, usuarios.email, { message: 'Logado.' })
    }else{
        return cb(null, false)
    }
}))

passport.serializeUser(function(login, cb) {
    process.nextTick(function() {
      cb(null, { email: user.email, senha: user.senha });
    });
  })

  passport.deserializeUser(function(login, cb) {
    process.nextTick(function() {
      return cb(null, login);
    });
  });

}