let one = +(prompt("Quantos números?"));

let two = 0;
let three = 1;
let resultado = "";
let contador = 0;

do {
    resultado = resultado + two + " ";
    let proximo = two + three;
    two = three;
    three = proximo;
    contador++;
} while (contador < one);

console.log(resultado);