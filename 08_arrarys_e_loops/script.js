// console.log(videogames[2]);

// videogames.pop(); //Remove o último item e retorna ele
// videogames.push('3DS');  //Adiciona um item no final do array
// videogames.length; // 3

for (var numero = 0; numero <= 10; numero++){
    console.log(numero);
}

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}


var videogames = ['Switch', 'PS4', 'XBOX', '3DS'];

for(var item = 0; item < videogames.length; item++){
    console.log(videogames[item]);
    if(videogames[item] === 'PS4') {
        break;
    }
}

var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index, array){
  console.log(fruta, index, array); 
});


var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
    console.log(numero);
    numero++;
} 