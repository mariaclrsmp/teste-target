const faturamento = [
    {estado:"SP", valor:67836.43},
    {estado:"RJ", valor:36678.66},
    {estado: "MG", valor:29229.88},
    {estado:"ES", valor:27165.48},
    {estado:"Outros", valor:19849.53}
]

const total = faturamento.reduce((soma, numero) => {
    return (soma + numero.valor)
}, 0);

let percentual = {}; 
for (i = 0 ; i < faturamento.length ; i++) {
    percentual[faturamento[i].estado] = (faturamento[i].valor / total * 100).toFixed(1);
    console.log(`${faturamento[i].estado}: ${percentual[faturamento[i].estado]}%`)
}

