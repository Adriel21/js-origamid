// Função para verificar se um valor é truthy
function carro(marca) {
    if(marca === 'toyota') {
        return 'Bom gosto';
    } else {
        return 'Mal gosto';
    }
}

console.log(carro('toyota'));

// Crie uma função que retorne o perímetro de um quadrado

// function perimetro(lado){
//     return lado*4;
// }

// var base = prompt('Digite o valor do lado');
// console.log(perimetro(base));



// Função que retorna nome completo - com parâmetros: nome e sobrenome

// function identificacao(nome, sobrenome) {
//     return `${nome} Adriel${sobrenome}`;
// }

// var nomee = prompt('Digite seu nome');
// var lastname = prompt('Digite seu sobrenome');

// console.log(identificacao(nomee, lastname));

// Crie uma função que verifica se o número é par
// function parOuimoar(numero){
//     if(numero % 2 == 0) {
//         return 'O número é par';
//     } else {
//         return 'O número é ímpar'
//     }
// }

// valor = prompt("Digite um número");
// console.log(parOuimoar(valor));

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function aleatorio(dado){
    console.log(typeof dado);
    return dado;
    
}

console.log(aleatorio('Qualquer coisa'));


//addeventlistener é uma função nativa do JavaScript, utilize-a para mostrar no console o seu nome quando o evento scroll ocorrer

addEventListener("scroll", function() {
    console.log('Adriel');
})


var totalPaises = 193;
// Corrija o erro abaixo
 function precisoVisitar(paisesVisitados) {
     
     return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
   }
   function jaVisitei(paisesVisitados) {
     
     return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
   }
   console.log(precisoVisitar(20));
   console.log(jaVisitei(20));