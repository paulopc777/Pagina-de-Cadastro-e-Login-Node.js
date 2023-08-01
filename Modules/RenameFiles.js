const multer = require("multer");

    //Renomeando arquivo Multer
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            //Pasta de Destino
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            //Pega o Nome do arquivo
            const NUMBER1 = file.originalname;
            //Expot para Pirntar na tela etc...
            module.exports = NUMBER1;
            // Indica o novo nome do arquivo:
            cb(null, NUMBER1)
            //Outro modo de usar
            //`${novoNomeArquivo}.${extensaoArquivo}`
        }
    });

module.exports = storage;