const ListaFaturamento = require('./dados.json')

function calcMenorValor(faturamento) {
    let menorValor = faturamento[0];
    for (let i = 1; i < faturamento.length; i++) {
        if (faturamento[i].valor < menorValor.valor && faturamento[i].valor !== 0) {
            // para haver faturamento, o valor deve ser acima de zero.
            menorValor = faturamento[i];
        }
    }
    return menorValor;
}


function calcMaiorValor(faturamento) {
    let maiorValor = faturamento[0];
    for (let i = 1; i < faturamento.length; i++) {
        if (faturamento[i].valor > maiorValor.valor) {
            maiorValor = faturamento[i];
        }
    }
    return maiorValor;
}


function AcimaDaMedia(faturamento) {
    const dias = faturamento.length
    let soma = 0
    faturamento.forEach((item) => {
        soma += item.valor
    })

    const media = soma / dias
    let qtdDias = 0;

    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i].valor > media) {
            qtdDias++
        }
    }
    return qtdDias;
}

function resultado(faturamento) {
    let menor = calcMenorValor(faturamento);
    let maior = calcMaiorValor(faturamento);
    let acimaMedia = AcimaDaMedia(faturamento);

    console.log(`O menor valor de faturamento é ${menor.valor.toFixed(3)}, o maior é ${maior.valor.toFixed(3)} e a quantidade de dias com faturamento acima da média é de ${acimaMedia} dias`)
}

resultado(ListaFaturamento);
