// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var eu = {
    nome: 'Adriel',
    sobrenome: 'Lira',
    idade: 21,
    peso: 89 + 'kg',
    cidade: 'Francisco Morato',
    nomecompleto(){
        return this.nome + ' ' + this.sobrenome;
    }
}

console.log(eu.peso);
// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(eu.nomecompleto());

// Modifique o vakir da propriedade preco para 3000
var carro = {
    preco: 1000, 
    portas: 4,
    marca: 'Audi'
}

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: '10 anos',
    late(homem){
        if(homem === 'homem') {
           return 'late';
        } else {
            return 'não late';
        }
    }
}

console.log(cachorro.late('mulher'));

