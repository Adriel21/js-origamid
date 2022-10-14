//Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}

// console.log(var, marca, portas); 
//chamada incorreta e variáveis dentro do bloco declados como const e let


// Como corrigir o erro abaixo?:
const dois = 2;
function somarDois(x) {
    // const dois = 2; - para corrigir, basta declarar a variável fora do escopo da função
    return x + 2;
}

function dividirDois(x) {
    return x / dois;
}

console.log(somarDois(4));

// O que fazer para o total retornar 500?

var numero = 50;

// Para retornar 500, bastou alterar a declaração da variável no escopo do for de var para let
for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);

