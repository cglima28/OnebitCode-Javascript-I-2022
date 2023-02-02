const nome = prompt("Qual seu nome?");
let cidades = "";
let contagem = 0;

let continuar = prompt("Já visitou alguma cidade? sim ou não");

while (continuar === "sim") {
  let cidade = prompt("Qual o nome da cidade visitada?");
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Já visitou alguma outra cidade? sim ou não");
}

alert(
  "nome: " +
    nome +
    "\nQuantidade de Cidades visitadas: " +
    contagem +
    "\nCidades Visitadas:\n " +
    cidades
);
