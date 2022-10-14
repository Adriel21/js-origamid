// Escopo de função
// function mostarCarro() {
  //  var carro = 'Fusca';
  //   console.log(carro);
// }

// mostarCarro(); //Carro no console
// console.log(carro); //Erro, carro is not definded

// Escopo de bloco
if(true) {
    // Para que o escopo de bloco seja respeitado, utilize let ou const ou declare variável fora do bloco
    let mes = 'Dezembro';
    console.log(mes);
}
// console.log(mes); 


// Escopo com loop For
for(let i = 0; i < 10; i++){
    console.log(`Número ${i}`);
}

// console.log(i);

// Const
const semana = 'Sexta';
//  semana = 'Quinta';
console.log(semana);

const data = {
    ano: 2018,
    mes: 'Dezembro',
}

data.ano = 2019;
data.dia = 25;
// data = 'Alo'; //Não permitido
console.log(data);

// Let
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; // erro, redeclarou a variável