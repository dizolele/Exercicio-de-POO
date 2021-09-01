import { Calculadora } from "./index";

let ladoQuadrado = 5
let alturaRetangulo = 7
let baseRetangulo = 7
let raioCirculo = 8

let calculadora = new Calculadora(baseRetangulo, alturaRetangulo, ladoQuadrado, raioCirculo)
console.log(calculadora.getAreaQuadrado());