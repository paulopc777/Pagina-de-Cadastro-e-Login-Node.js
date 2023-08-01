const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require("cookie-parser");
const multer = require("multer");
const storage = require('./Modules/RenameFiles');
const Auth = require('./Modules/Auth')
const Ferifyauth = require('./Modules/VerificarAuth')
const database = require('./db/db')
const User = require('./Model/Usuarios')
const UserControle = require("./controller/UserControle");

//Conecta no banco de Dados
try{
    database.sync().then(() =>{
    })
}catch(err){
    console.log('erro',err)
}
//Rota Publica
app.use(express.static('public'));
//Json no express
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//User o Cokie parse
app.use(cookieParser())
//Usar EJS
app.set('view engine', 'ejs');
app.set('views', './views');



app.get('/', (req, res) => {
    res.redirect('/login')
})
app.get('/login', function (req, res) {
    res.render('index')
});

app.post('/login',Auth,(req,res) =>{
    res.redirect('/Links')
});

app.get('/Cadastrar',(req,res) =>{
    res.render('Castro')
});

app.post("/Cadastrar",UserControle.UserCreate,(req,res) =>{
    res.redirect('/login')
});

app.get('/Links',Ferifyauth,(req,res) =>{
   res.render('Links',{Nome:req.cookies.Logado.nome})
});

app.get('/Logado',Ferifyauth,(req,res) =>{
    res.send(req.cookies)
});

app.get('/nome',(req,res) => {
    res.send(req.cookies.Logado.Nome)
});

app.get('/list',UserControle.UserFid);

app.get('/post',Ferifyauth,(req,res) =>{
    res.render('Telapost')
});

const upload = multer({ storage });
app.post('/post',Ferifyauth, upload.single('file'), (req, res) => {
    //Pegando Nome da Imagem
    const NUMBER1 = require('./Modules/RenameFiles');
    //Pintando no Console 
    console.log(`Foi feito upload de arquivo com nome ${NUMBER1}`)
    res.redirect('/post')
});

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
});
