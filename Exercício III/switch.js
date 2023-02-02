const metros = prompt("Insira o valor em Metros");
const valorMetros = parseFloat(metros);
const unidadeDeMedida = prompt(
  "Escolha a unidade de medida:\nmm \ncm \ndm \ndam \nhm \nkm"
);

switch (unidadeDeMedida) {
  case "mm":
    alert("O resultado é: " + valorMetros * 1000 + "mm");
    break;
  case "cm":
    alert("O resultado é: " + valorMetros * 100 + "cm");
    break;
  case "dm":
    alert("O resultado é: " + valorMetros * 10 + "dm");
    break;
  case "dam":
    alert("O resultado é:" + valorMetros / 10 + "dam");
    break;
  case "hm":
    alert("O resultado é: " + valorMetros / 100 + "hm");
    break;
  case "km":
    alert("O resultado é: " + valorMetros / 1000 + "km");
    break;
  default:
    alert("opção inválida");
}
