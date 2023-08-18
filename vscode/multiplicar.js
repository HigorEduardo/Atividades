function multiplicacaoSemMultiplicar(numero1, numero2) {
    let resultado = 0;
    for (let i = 0; i < numero2; i++) {
        resultado += numero1;
    }
    return resultado;
}

const numero1 = 5;
const numero2 = 5;
const resultado = multiplicacaoSemMultiplicar(numero1, numero2);
console.log(`A multiplicação de ${numero1} por ${numero2} é ${resultado}`);
