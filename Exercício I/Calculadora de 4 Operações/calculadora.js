const entrada1 = prompt("informe o primeiro número");
const entrada2 = prompt("Informe o segundo número");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2); // foi usado o parseflaot para converter a string da const entrada em number na const x e y, pois geralmente a função prompt traz consigo uma string e não um number. Caso não fosse usado o parsefloat a ao invés de soma seria realizado uma concatenação na calculadora e ao invés de 5+9=14 seria 5 e 9=59

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  "Resultado:\n" +
    "\nSoma:" +
    soma +
    "\nSubtração:" +
    subtracao +
    "\nMultiplicação:" +
    multiplicacao +
    "\nDivisão:" +
    divisao
);
