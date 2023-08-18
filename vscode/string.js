function inverterString(string) {
    let novaString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        novaString += string[i];
    }
    return novaString;
}
const textoOriginal = "Javascript";
const textoInvertido = inverterString(textoOriginal);
console.log(textoInvertido);  