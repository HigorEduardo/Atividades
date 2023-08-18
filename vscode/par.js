function NumerosPares(array) {
    const numerosPares = array.filter(numero => numero % 2 === 0);
    return numerosPares;
}


const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const numerosPares = NumerosPares(numeros);
console.log(numerosPares);  

