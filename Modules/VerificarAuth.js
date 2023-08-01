let cookieParser = require("cookie-parser");


function ferifyauth(req, res, next) {
    var cookie = req.cookies;
    if (cookie.Logado === undefined ) {
        res.redirect('/login')
    } else {
        next();
    }
}

module.exports = ferifyauth;