//Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total); // result = 35

// Crie duas expressões que retorne Nan
// 01
var km = "105km";
console.log(+km);

//02 
var um = "dois";
var dois = "tres";
console.log(isNaN(um + dois));

// Somar a sttring '200' com o número 50 e retornar 250
var numero = '200';
var numeroDois = 50;

console.log(+numero + numeroDois);

//Incremente o número 5 e retorne o seu valor incrementado
var cinco = 5;
++cinco;
console.log(cinco);

//Como dividir o peso por 2?
var numerico = '80';
var unidade = 'kg';
var peso = numerico; // '80kg'
var pesoPorDois = peso / 2; //NaN (Not a Number)

console.log(pesoPorDois + unidade);