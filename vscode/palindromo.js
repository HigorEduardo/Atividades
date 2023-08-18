function Palindromo(palavra) {
    const palavraSemEspacos = palavra.replace(/\s/g, '').toLowerCase();
    const palavraReversa = palavraSemEspacos.split('').reverse().join('');
    return palavraSemEspacos === palavraReversa;
}

console.log(Palindromo("ovo"));  
console.log(Palindromo("uva")); 