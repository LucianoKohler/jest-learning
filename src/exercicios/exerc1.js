

// const idadesENotas = [
//   [25, 2],
//   [30, 2],
//   [44, 3],
//   [22, 2],
//   [35, 1],
//   [52, 3],
//   [28, 1],
//   [45, 2],
//   [33, 3],
//   [29, 1],
//   [42, 2],
//   [26, 3],
//   [38, 1],
//   [27, 2],
//   [31, 3]
// ];

//1: regular
//2: bom
//3: ótimo

var mediaIdadeOtimo = 0;
var qtdIdadeOtimo = 0;
var qtdPessoasRegular = 0;
var porcentagemPessoasBom = 0;

idadesENotas.forEach((pessoa) => {
  if(pessoa[1] == 1) qtdPessoasRegular++;
  if(pessoa[1] == 2) porcentagemPessoasBom++;
  if(pessoa[1] == 3){
    mediaIdadeOtimo += pessoa[0];
    qtdIdadeOtimo++;
  } 
});

mediaIdadeOtimo /= qtdIdadeOtimo;
porcentagemPessoasBom /= idadesENotas.length;
porcentagemPessoasBom *= 100;

console.log(`Média de idade das pessoas que responderam ótimo: ${mediaIdadeOtimo}`);
console.log(`Quantidade de pessoas que responderam regular: ${qtdPessoasRegular}`);
console.log(`Porcentagem de pessoas que responderam bom: ${porcentagemPessoasBom.toFixed(2)}%`);
