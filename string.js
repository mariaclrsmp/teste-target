const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverter(string) {
    let stringInvertida = "";
    
    for (let i = string.length - 1; i >= 0 ; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}



input.question('Digite uma palavra para invertê-la: ', (palavra) => {
    const resultado = inverter(palavra);
    console.log(resultado);
    input.close();
});