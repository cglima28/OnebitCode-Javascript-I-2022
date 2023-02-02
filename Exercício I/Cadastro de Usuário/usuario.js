const primeiroNome = prompt("Informe seu primeiro nome:");
const sobrenome = prompt("Informe seu sobrenome");
const grauDeEscolaridade = prompt("Informe seu Grau de Escolaridade:");
const anoDeNascimento = prompt("Informe seu ano de Nacimento");

alert(
  "Usuário Cadastrado com Sucesso!\n" +
    "\nNome Completo:" +
    primeiroNome +
    " " +
    sobrenome +
    "\nGrau de Escolaridade:" +
    grauDeEscolaridade +
    "\nIdade: " +
    (2022 - anoDeNascimento)
);
