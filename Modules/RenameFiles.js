
const multer = require("multer");
const contador = require('./Couter/Counter')
const datadb = require('../data.json')

//Renomeando arquivo Multer
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            //Pasta de Destino
            cb(null, 'public/')
        },
        filename: function (req, file, cb) {
            contador
            const data = JSON.stringify(datadb)
            const Data = JSON.parse(data).counter

            console.log(Data)
            //Pega o Nome do arquivo
            const extensaoArquivo = file.originalname.split('.')[1];
           // const NUMBER1 = file.originalname;
           const NUMBER1 = `${Data}.${extensaoArquivo}`
          
            //Expot para Pirntar na tela etc...
            module.exports = NUMBER1;
            // Indica o novo nome do arquivo:
            cb(null, NUMBER1)
        }
    });

module.exports = storage;