var pessoa = {
    nome: 'André', 
    idade: 28
}

console.log(pessoa.idade);

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    }, 
    perimetro(lado) {
        // Pode ou não ter a palalavra function e dois pontos
        return this.lados * lado;
    },
    cinco() {
        return 5;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(quadrado.cinco());

// Math é um objeto nativo do JavaScript
// Console também é um objeto que chama diversos outros métodos
console.log(Math.random());

console.table(quadrado);

var height = 100;
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
      //  return height/2; - acessando a variável declarada no escopo pai
       return this.height/2; //o this sempre faz referência ao objeto, portanto, acessando o height declarado internamente ao objeto
    }
}

menu.backgroundColor = '000'; //set - setando valor
menu.color = 'blue';
menu.esconder = function() {
    console.log('escondi');
}
var bg = menu.backgroundColor;
