let name = prompt('Qual o seu nome e sobrenome?')
let firstInicial = name.slice(0,1)
let positionInicialSecondName = name.indexOf(' ')+1;
let secondInicial = name.slice(positionInicialSecondName, positionInicialSecondName + 1);

document.write('Suas iniciais são: ' + firstInicial.toUpperCase() + secondInicial.toUpperCase());
