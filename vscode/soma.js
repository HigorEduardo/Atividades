function NumerosPares(inicio, fim) {
    let soma = 0;
    for (let numero = inicio; numero <= fim; numero++) {
        if (numero % 2 === 0) {
            soma += numero;
        }
    }
    return soma;
}

const inicio = 1;
const fim = 10;
const resultado = NumerosPares(inicio, fim);
console.log(`A soma dos números pares no intervalo de (${inicio}, ${fim}) é ${resultado}`);
