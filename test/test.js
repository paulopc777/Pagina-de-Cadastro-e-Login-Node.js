const imgdb = require('../db/imgs.json')

function test(nome){
    //var nome = req.cookies.Logado.Nome;
    const dbs = JSON.stringify(imgdb)
    const users = JSON.parse(dbs).img
    const ferify = users.find((u) => u.Nome === nome)
    const imgs = ferify.img;
    const img = JSON.parse(imgs)
    console.log(img)
}
test('Paulo')