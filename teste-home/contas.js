"use strict";
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
exports.__esModule = true;
var base_conta_1 = require("./base-conta");
var ContaConrrentePF = /** @class */ (function (_super) {
    __extends(ContaConrrentePF, _super);
    function ContaConrrentePF() {
        var _this = _super.call(this, 'valor para super') || this;
        _this.numero = '5 string';
        return _this;
    }
    return ContaConrrentePF;
}(base_conta_1.ContaConrrente));
exports.ContaConrrentePF = ContaConrrentePF;
