const imgdb = require('../db/imgs.json')

function Imginsert(nome) {
    const dbs = JSON.stringify(imgdb)
    const users = JSON.parse(dbs).img
    const ferify = users.find((u) => u.Nome === nome)
    const imgs = ferify.img;
    const img = JSON.parse(imgs)
    module.exports = img;
}
 

