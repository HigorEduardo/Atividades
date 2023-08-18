function Vogais(p) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    for (let i = 0; i < p.length; i++) {
        if (vogais.includes(p[i])) {
            contador++;
        }
    }

    return contador;
}

console.log(Vogais("maçã"));   
console.log(Vogais("banana")); 
