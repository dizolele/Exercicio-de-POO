class Calcular {
    base: number 
    altura: number
    

    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
        
    }

    getTriangulo(): number {
        return this.base * this.altura / 2
    }

    getQuadrado(): number {
        return this.altura*this.altura
    }

    getRetangulo(): number {
        return this.base * this.altura
    }

    getParalelogramo(): number {
        return this.base * this.altura
    }

    
}

class AreasComplexas extends Calcular {
    constructor(
        base: number,
        altura: number,
       private baseMenor: number
    ) {
        super(base, altura)
    }

    getTrapezio(): number {
        return (this.base + this.baseMenor) * this.altura / 2
    }
}

class AreasComplexas2 extends Calcular {
    constructor(
        base: number,
        altura: number,
        private PI: number
    ) {
        super(base, altura)
    }

    getCirculo(): number {
        return this.PI * (this.altura*this.altura)
    }
}

let calcularTriangulo = new Calcular(8, 7);
console.log(calcularTriangulo.getTriangulo());

let calcularQuadrado = new Calcular(4, 4);
console.log(calcularQuadrado.getQuadrado());

let calcularRetangulo = new Calcular(25, 15);
console.log(calcularRetangulo.getRetangulo());

let calcularParalelogramo = new Calcular(7, 4);
console.log(calcularParalelogramo.getParalelogramo());

let calcularTrapezio = new AreasComplexas(8, 4, 4)
console.log(calcularTrapezio.getTrapezio());

let calcularcirculo = new AreasComplexas2(0, 5, 3.14);
console.log(calcularcirculo.getCirculo());