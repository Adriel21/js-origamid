// Crie um array com os anos que o Brasil ganhou a copa
// 1959, 4962, 1970, 1994, 2002

var anos =  [1959, 1962, 1970, 1994, 2002];

// Interaja com o array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano} `

for(i = 0; i <= anos.length; i++) {
    if(anos[i] === 2002) {
        console.log(`O Brasil ganhou a copa de ${anos[i]}`);
    }
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

// frutas.forEach(function(fruta) {
//     if(fruta === 'Pera') {
//         console.log(fruta);
//     }
// })

for(var j = 0; j < frutas.length; j++) {
    console.log(frutas[j]);
    if(frutas[j] == 'Pera') {
        break;
    }
}


// var ultimaFruta = frutas[4];
// OU
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);