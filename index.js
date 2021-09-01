"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora(b, a, lado, raio) {
        this.base = b;
        this.altura = a;
        this.lado = lado;
        this.raio = raio;
    }
    Calculadora.prototype.getAreaQuadrado = function () {
        var resultado = Math.pow(this.lado, 2);
        return resultado;
    };
    Calculadora.prototype.getAreaRetangulo = function () {
        var resultado = this.base * this.altura;
        return 'A área do retangulo é ' + resultado;
    };
    Calculadora.prototype.getAreaCirculo = function () {
        var resultado = (Math.pow(this.raio, 2)) * 3.14;
        return 'A área do círculo é ' + resultado;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
var ladoQuadrado = 5;
var alturaRetangulo = 7;
var baseRetangulo = 7;
var raioCirculo = 8;
var calculadora = new Calculadora(baseRetangulo, alturaRetangulo, ladoQuadrado, raioCirculo);
//console.log(calculadora.getAreaQuadrado());
//console.log(calculadora.getAreaRetangulo());
//console.log(calculadora.getAreaCirculo());
//function Calc(bas:number,al:number,ld?:number,raio?:number){
//return (bas**2) *al;
//}
//let entrada = Calc(2,1);
//console.log(`Resultado: ${entrada}`)
