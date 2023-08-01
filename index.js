    //Modulos
const express = require('express');
const app = express();
const path = require('path');
const multer = require("multer");
const fs = require('fs');
const storage = require('./Modules/RenameFiles');
app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/src/html'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



var passport = require('passport');
require('./Routes/auth')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
  }));
app.use(require('cookie-parser')());
app.use(passport.initialize());
app.use(passport.session());

app.use(require('express-session')({ secret: '123', resave: true, saveUninitialized: true }));



//Rota Pincipal
app.get('/' ,function(req, res) {
        res.sendFile(path.join(__dirname + '/src/html' + '/index.html'));
})

app.post('/login',passport.authenticate('local', { 
    failureRedirect: '/naofoi' 
}),(req,res) =>{
    res.sendFile(path.join(__dirname + '/src/html' + '/telapost.html'));
})
//Local de Upload de Fotos
app.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/html' + '/telapost.html'));
})
//Muter upload img
const upload = multer({ storage });
//Post de Enviode Foto
app.post('/post', upload.single('file'), (req, res) => {

    //Pegando Nome da Imagem
    const NUMBER1 = require('./Modules/RenameFiles');
    //Pintando no Console 
    console.log(`Foi feito upload de arquivo com nome ${NUMBER1}`)
})

//Porta de Servidor
const porta = 3000;
//Start Server
app.listen(porta, () => {
    console.log(`Servidor randando na porta ${porta}`)
})