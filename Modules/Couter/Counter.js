const fs = require('fs');
const datadb = require('./data.json')


// Função para incrementar o valor no arquivo JSON
function incrementarContador() {
    // Ler o arquivo JSON atual
    
     const data = fs.readFileSync('data.json',function(err, data){
        console.log(data);
     })

    // Converter os dados do arquivo JSON para um objeto JavaScript
    var jsonData = JSON.parse(data);

    console.log(jsonData);

    const add = jsonData.counter + 1;

    jsonData.counter = add;

    const stringify = JSON.stringify(jsonData);

    console.log(stringify)

    fs.readFile('data.json', stringify, 'utf-8', () => {
        console.log('The file has been saved!');
    });
}

