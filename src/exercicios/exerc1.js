// const arrayDePessoas = [
//   [25, "M"],
//   [30, "F"],
//   [40, "M"],
//   [22, "F"],
//   [35, "M"],
//   [50, "F"],
//   [28, "M"],
//   [45, "M"],
//   [33, "F"],
//   [29, "F"]
// ];

//idade, sexo

function mediaIdade(data){

  var mediaIdadeHomens = 0;
  var mediaPesoMulheres = 0;
  var totalHomens = 0;
  var totalMulheres = 0;
  data.forEach((pessoa) => {
    if(pessoa[1] == "M"){
      mediaIdadeHomens += pessoa[0];
      totalHomens++;
    }else if(pessoa[1] == "F"){
      mediaPesoMulheres += pessoa[0];
      totalMulheres++;
    }else{return "Sexo inválido no array";}
  })
  mediaIdadeHomens /= totalHomens;
  mediaPesoMulheres /= totalMulheres;
  
  return [mediaIdadeHomens, mediaPesoMulheres];
}

module.exports = mediaIdade