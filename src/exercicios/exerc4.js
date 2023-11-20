
function geraDataPorExtenso(date){

  let meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho", 
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];
  
  //Pegar o mês
  let mes = meses[parseInt(date.split("/")[1])-1];
  let data = `${date.split("/")[0]} de ${mes} de ${date.split("/")[2]}`;
  
  return data;
  }
  
  module.exports = geraDataPorExtenso;