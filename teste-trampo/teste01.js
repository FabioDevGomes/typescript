var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var NovaClasseTs = /** @class */ (function () {
    function NovaClasseTs(nome) {
        this.nome = nome;
    }
    NovaClasseTs.prototype.exibirNome = function () {
        console.log(this.nome);
    };
    return NovaClasseTs;
}());
var subClasse = /** @class */ (function (_super) {
    __extends(subClasse, _super);
    function subClasse(nome) {
        var _this = _super.call(this, 'valor construtor') || this;
        _this.nome = nome;
        return _this;
    }
    return subClasse;
}(NovaClasseTs));
var variavelObjeto = new NovaClasseTs('nova classe');
variavelObjeto.exibirNome();
