const database = require('../db/db')
const Sequelize = require('sequelize');

const Usuario = database.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { database, modelname: 'User', tableName: 'Users' }
)
module.exports = Usuario;