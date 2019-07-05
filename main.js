"use strict";
exports.__esModule = true;
var express = require("express");
var PORT = 3000;
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (op1, op2) {
        return op1 - op2;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
var main = function () {
    var app = express();
    app.set('view engine', 'pug');
    app.set('views', './views');
    app.get('/calculadora', function (req, res) {
        res.render('calculadora', {
            suma: "0"
        });
    });
    app.get('/sumar', function (req, res) {
        var op1 = req.query.op1;
        var op2 = req.query.op2;
        var calculadora = new Calculadora();
        res.render('calculadora', {
            suma: calculadora.sumar(parseInt(op1), parseInt(op2))
        });
    });
    // Iniciamos la ejecucion del server
    //ya no funciona local con {proces.env.PORT} ahora funciona tmb localmente
    let puerto= process.env.PORT||3000


    app.listen(puerto, function () {
        console.log(`Server running in port ${puerto}`);
    });
};
main();
