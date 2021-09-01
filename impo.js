"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var ladoQuadrado = 5;
var alturaRetangulo = 7;
var baseRetangulo = 7;
var raioCirculo = 8;
var calculadora = new index_1.Calculadora(baseRetangulo, alturaRetangulo, ladoQuadrado, raioCirculo);
console.log(calculadora.getAreaQuadrado());
