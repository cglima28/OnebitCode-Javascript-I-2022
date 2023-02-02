function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

//dobro(5);
//dobro(7);

//dobro(); // resultado "O dobro de undefined é NaN" NaN -> not a number. X não é um número para ser multilicado por 2

function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + " !");
}

//dizerOla("Ana");
//dizerOla();

function soma(a, b) {
  alert("O resultado da soma é: " + (a + b));
}

//soma(2, 2);

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "leitor") {
  const usuario = { nome, email, senha, tipo };
  console.log(usuario);
}

function novoUsuario(nome, tipo = "leitor", email, senha) {
  const usuario = { nome, email, senha, tipo };
  console.log(usuario);
}

criarUsuario("Isaac", "isaac@email.com", "1234");
novoUsuario("Isaac", "isaac@email.com", "1234");
