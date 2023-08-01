const Usuarios = require("../Model/Usuarios");
const database = require('../db/db')


module.exports = class funcionarioController {

    static async UserCreate(req,res,next) {
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;

        const User = {
            nome: nome,
            email: email,
            senha: senha
            }
            await Usuarios.create(User);
            res.json({message: "Cadastro realizado com sucesso!"});
            setInterval(next(),1000)
    }

    static async UserListar(req,res) {
        const funcionario = await Usuarios.findAll({ raw:true });
        res.json(funcionario);
        }

    static async UserFid(req,res){
        const user = await Usuarios.findAll();
        res.json(user);
    }
}
