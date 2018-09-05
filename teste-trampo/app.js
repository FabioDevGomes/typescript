"use strict";
exports.__esModule = true;
var EspacoNave_1 = require("./EspacoNave");
var classe_export_1 = require("./classe-export");
var _ = require("lodash");
console.log(_.pad('typescript exemplos', 40, '='));
/* import { Conta, ContaGenerica } from "./classe-export";
 */
/* import { EspacoNave } from "./EspacoNave";
 */
var message = "valor para string";
console.log(message);
var tipoNumer = 4;
console.log(tipoNumer);
function exemploFuncao(name) {
    console.log('o nome infomrado foi ' + name);
}
exemploFuncao('Fábio');
var exemplo2 = function (param, param2) {
    console.log('valor opcional' + param2);
    console.log("valor opcional > " + param2);
    return param < 12;
};
var call = function (name) {
    if (name === void 0) { name = 'teste'; }
    return console.log("valor opcional > " + name);
};
console.log(exemplo2(4));
console.log(exemplo2(4, 'Fábio'));
call('Hello again');
call();
var variavelObjeto = new EspacoNave_1.EspacoNave('valor construtor');
variavelObjeto.exibirNome();
var contaQualquer = new classe_export_1.Conta(445);
