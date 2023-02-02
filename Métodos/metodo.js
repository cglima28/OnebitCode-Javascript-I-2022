// Métodos são funções atreladas a objetos.

let pessoa = {
  nome: "Ana",
  idade: 28,
  dizerOla() {
    console.log("Olá, mundo! Meu nome é " + this.nome);
  },
};

console.log(pessoa);
pessoa.dizerOla();
