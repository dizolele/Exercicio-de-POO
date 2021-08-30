"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Calcular = /** @class */ (function () {
    function Calcular(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Calcular.prototype.getTriangulo = function () {
        return this.base * this.altura / 2;
    };
    Calcular.prototype.getQuadrado = function () {
        return this.altura * this.altura;
    };
    Calcular.prototype.getRetangulo = function () {
        return this.base * this.altura;
    };
    Calcular.prototype.getParalelogramo = function () {
        return this.base * this.altura;
    };
    return Calcular;
}());
var AreasComplexas = /** @class */ (function (_super) {
    __extends(AreasComplexas, _super);
    function AreasComplexas(base, altura, baseMenor) {
        var _this = _super.call(this, base, altura) || this;
        _this.baseMenor = baseMenor;
        return _this;
    }
    AreasComplexas.prototype.getTrapezio = function () {
        return (this.base + this.baseMenor) * this.altura / 2;
    };
    return AreasComplexas;
}(Calcular));
var AreasComplexas2 = /** @class */ (function (_super) {
    __extends(AreasComplexas2, _super);
    function AreasComplexas2(base, altura, PI) {
        var _this = _super.call(this, base, altura) || this;
        _this.PI = PI;
        return _this;
    }
    AreasComplexas2.prototype.getCirculo = function () {
        return this.PI * (this.altura * this.altura);
    };
    return AreasComplexas2;
}(Calcular));
var calcularTriangulo = new Calcular(8, 7);
console.log(calcularTriangulo.getTriangulo());
var calcularQuadrado = new Calcular(4, 4);
console.log(calcularQuadrado.getQuadrado());
var calcularRetangulo = new Calcular(25, 15);
console.log(calcularRetangulo.getRetangulo());
var calcularParalelogramo = new Calcular(7, 4);
console.log(calcularParalelogramo.getParalelogramo());
var calcularTrapezio = new AreasComplexas(8, 4, 4);
console.log(calcularTrapezio.getTrapezio());
var calcularcirculo = new AreasComplexas2(0, 5, 3.14);
console.log(calcularcirculo.getCirculo());
