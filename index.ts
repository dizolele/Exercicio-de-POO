export class Calculadora {
    base: number 
    altura: number 
    lado: number
    raio: number

    constructor(b: number, a: number, lado: number, raio: number) {
        this.base = b
        this.altura = a
        this.lado = lado
        this.raio = raio
    }

    getAreaQuadrado(): number  {
        let resultado = this.lado**2
        return  resultado
    }

    getAreaRetangulo(): string {
        let resultado = this.base * this.altura;
        return 'A área do retangulo é ' + resultado
    }

    getAreaCirculo(): string {
        let resultado = (this.raio**2) * 3.14
        return 'A área do círculo é ' + resultado
    }
    
    
}

let ladoQuadrado = 5
let alturaRetangulo = 7
let baseRetangulo = 7
let raioCirculo = 8

let calculadora = new Calculadora(baseRetangulo, alturaRetangulo, ladoQuadrado, raioCirculo)
//console.log(calculadora.getAreaQuadrado());
//console.log(calculadora.getAreaRetangulo());
//console.log(calculadora.getAreaCirculo());


//function Calc(bas:number,al:number,ld?:number,raio?:number){
    //return (bas**2) *al;
//}

//let entrada = Calc(2,1);

//console.log(`Resultado: ${entrada}`)