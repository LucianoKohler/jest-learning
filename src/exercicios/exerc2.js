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


function getScore(data){
  var qtdRegular = 0;
  var qtdBom = 0;
  var qtdOtimo = 0;
  var qtdInvalidas = 0;

data.forEach((nota) => {
  switch (nota) {
    case 1:
      qtdRegular++;
      break;
    case 2:
      qtdBom++;
      break;
    case 3:
      qtdOtimo++;
      break;
    default:
      qtdInvalidas++;
      break;
  }

  });
  console.log(qtdRegular, qtdBom, qtdOtimo, qtdInvalidas)
  return [qtdRegular, qtdBom, qtdOtimo, qtdInvalidas];
};

module.exports = getScore;