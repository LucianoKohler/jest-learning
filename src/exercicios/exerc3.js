
function calculaAumento(salario){
if     (salario <= 280) return 0.20;
else if(salario <= 700) return 0.15;
else if(salario <=1500) return 0.10;
else                    return 0.05;
}

module.exports = calculaAumento;
