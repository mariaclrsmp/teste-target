const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// entrada de dados do usuário


function fibonacci(a, b, num) {
    let next = a + b;

    if (num === a || num === b) {
        return `${num} pertence a sequência Fibonacci`;
    }

    if (next > num) {
        return `${num} não pertence a sequência Fibonacci`;
    }

    return fibonacci(b, next, num);
    // usando a recursividade para verificar se o número fornecido pertence a sequência
}

input.question('Informe um número qualquer.', (num) => {

    console.log(fibonacci(0, 1, parseInt(num))); //necessita transformar o número informado em um número inteiro
    input.close();
});


