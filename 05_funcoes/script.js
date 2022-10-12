// function areaQuadrado(lado){
//     return lado * lado;
// }

// x = prompt("Informe o lado");

// if(x){
//     alert(areaQuadrado(x));
// }


// Funções Nomeadas
function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
    return 3.14;
}

var total = 5 * pi();
console.log(total);
console.log(pi());

// peso e altura são os parâmetros - espera receber valores
function imc(peso, altura) {
    const imc = peso / (altura * 2 );
    return imc;
}


// São argumentos - valores que passsamos dentro do parâmetro
console.log(imc(80, 1.80));
console.log(imc(60, 1.70));

function corFavorita(cor){
    if(cor === 'azul'){
        return "Eu gosto do céu";
    } else if (cor === 'verde') {
        return 'Eu gosto de mato';
    } else {
        return 'Eu não gosto de cores';
    }
}

console.log(corFavorita('azul'));

// addEventListener()

// Função nativa do JavaScript - callback - é executada quando algo acontece
addEventListener("click", function() {
    console.log('Oi');
})


// peso e altura são os parâmetros - espera receber valores
function imc2(peso, altura) {
    const imc = peso / (altura * 2 );
    console.log(imc);
}


// São argumentos - valores que passsamos dentro do parâmetro
imc2(80, 1.80);
console.log(imc2(60, 1.70));


// Não é uma boa prática retornar tipos diferentes na função
function terceiraIdade(idade){
    console.log(typeof idade);
    if(typeof idade !== 'number') {
        return 'Por favor preencha um número';
    }
    else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade(60));


function faltaVisitar(paisesVisitados){
    var totalPaises = 193; //Variáveis criadas dentro da função, tem seu escopo local
    return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(20));

// escopo léxico
var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
