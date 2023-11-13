function media(sexoArray, alturaArray){
  
  let minHeight = 9999;
  let maxHeight = 0;
  let manCount = 0;
  let womenCount = 0;
  let womenHeightAvg = 0;
  
  for(let i = 0; i < sexoArray.length; i++){
    if(alturaArray[i] < minHeight) minHeight = alturaArray[i];
    if(alturaArray[i] > maxHeight) maxHeight = alturaArray[i];
    if(sexoArray[i] == "F") womenHeightAvg += alturaArray[i]; womenCount++;
    if(sexoArray[i] == "M") manCount++;
  }
  
  womenHeightAvg /= womenCount;

  return {
    minHeight,
    maxHeight,
    womenHeightAvg,
    womenCount,
    manCount
  }
  
  // console.log(`Maior altura: ${maxHeight}`);
  // console.log(`Menor altura: ${minHeight}`);
  // console.log(`Média da altura das mulheres: ${womenHeightAvg.toFixed(2)}`)
  // console.log(`Quantidade de homens: ${manCount}`)

}

module.exports = media;