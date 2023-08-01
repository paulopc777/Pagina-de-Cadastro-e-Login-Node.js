const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./db/db.sqlite'
})

try{
    sequelize.authenticate();
    console.log('Banco conectado')
}catch(err){
    console.log('Erro: ',err)
}

module.exports = sequelize;