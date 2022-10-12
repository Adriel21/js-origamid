// Tipos de dados 

// Todos primitivos exceto os objetos
// var nome = 'André'; // String
// var idade = 28; // Number
// var possuiFaculdade = true; // Boolean
// var time; // Undefined
// var comida = null // Null - o null, quando verificado pelo typeof retorna como objeto por "bug" do javascript
// var simbolo = symbol() // symbol
// var novoObjeto = {} // obeject

// Primitivos são dados imutáveis

var nome = 'Adriel ';
var idade = 21;
var time; 
var simbolo = Symbol();
console.log(typeof time);

var sobrenome = "Lira"
var nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);

// Concatenação
// var gols = 1000;
// var frase = 'Romário fez ' + gols + ' gols';
// console.log(typeof frase);

var ano = '2018';
var mes = 8;
console.log(ano + mes);

var melhor = 'teste';
var frase1 = "Esse é o \"melhor\" jogo";

console.log(frase1);

// Template String 
var gols = 1000;
var frase = `Romário fez ${gols} gols`;
console.log(frase);

