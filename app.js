"use strict";
exports.__esModule = true;
var base_conta_1 = require("./base-conta");
var contas_1 = require("./contas");
var contaFabio = new base_conta_1.ContaConrrente('hyperdrive');
contaFabio.pagarConta();
var contaFabioPF = new contas_1.ContaConrrentePF();
contaFabioPF.pagarConta();
