function Fibonacci(nt) {
    let fibonacciSeq = [0, 1];
    for (let i = 2; i < nt; i++) {
        let proximoTermo = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
        fibonacciSeq.push(proximoTermo);
    }
    return fibonacciSeq;
}
const sequenciaFibonacci = Fibonacci(10);
console.log(sequenciaFibonacci);  

