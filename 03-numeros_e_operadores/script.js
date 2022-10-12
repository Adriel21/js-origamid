var total1 = 23;
var divisao = 200 / 5
var modulo = 3872983892 % 3;

console.log(modulo);

// JavaScript possui precisão até 15 casas, acima disso, os valores são areedondados

var testeNaN = 'Isso é 100' / 2;
console.log(isNaN(testeNaN));

console.log("=================================");
//A ordem importa
var total1 = 20 + 5 * 2; // 30
var total2 = (20+5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
console.log("=================================");

var soma1 = (10 + 10) + 20 + 30 * 4 / (2 + 10);
console.log(soma1);

var incremento = 5;
console.log(incremento++); // Pós incremento
console.log(incremento);

var incremento2 = 5;
console.log(++incremento2); //pré-incremento

console.log("=================================");

//Operador Unário - o + e - tenta transformar o valor seguinte em número
var frase = "Isso é um teste";
+frase;
-frase;

var idade = "28";
+idade; //28 (número)
-idade; // -28(número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade);
