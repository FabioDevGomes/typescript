"use strict";
exports.__esModule = true;
var ContaConrrente = /** @class */ (function () {
    function ContaConrrente(conta) {
        console.log(conta);
    }
    ContaConrrente.prototype.pagarConta = function () {
        if (Math.random() > 10) {
            console.log('maior 1 10 ' + Math.random());
        }
        else {
            console.log('menor q 10 ' + Math.random());
        }
    };
    return ContaConrrente;
}());
exports.ContaConrrente = ContaConrrente;
