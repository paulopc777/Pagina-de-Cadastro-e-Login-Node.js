const db = require('../db/user.json')
var passport = require('passport');
var LocalStrategy = require('passport-local');



passport.use(new LocalStrategy(function (email, senha, done) {
    const dbs = JSON.stringify(db);
    const users = JSON.parse(dbs).usuarios;
    const user = users.find((users) => users.email === email);

    if (!user) {
        console.log('ususario inesistente')
         done(null, false)
    } else {
        if (senha === user.senha) {
            console.log('senha bate')
             done(null, user)
        } else {
            console.log('senha nao bate')
             done(null, false)
        }
    }
}
));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, {
        id: user.nome,
        username: user.email
      });
    });
  });

  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

const dbs = JSON.stringify(db)
const users = JSON.parse(dbs).usuarios


function ola(email, senha, done) {
    const dbs = JSON.stringify(db);
    const users = JSON.parse(dbs).usuarios;
    const user = users.find((users) => users.email === email);

    if (!user) {
        console.log('ususario inesistente')
         done(null, false)
    } else {
        if (senha === user.senha) {
            console.log('senha bate')
             done(null, user)
        } else {
            console.log('senha nao bate')
             done(null, false)
        }
    }
}