var nome = "Adriel";

var nomeMinusculo = nome.toLowerCase();

var numero = 1.8;

// arredonda
console.log(numero.toFixed());

// Transforma numa string
console.log(typeof numero.toString());

// Funções também possui métodos e propriedades
function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado.toString();

// Vendo a quantidade de parâmetros ou argumentos
console.log(areaQuadrado.length);

// acessando os métodos do document
var btn = document.querySelector('.btn');

btn.addEventListener('click', 
function() {
    btn.innerHTML = 'Sucesso';
    btn.style.color ='red';
});

btn.classList //lista as classes existentes na variavel 