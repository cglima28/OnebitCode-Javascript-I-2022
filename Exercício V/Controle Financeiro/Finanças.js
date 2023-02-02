let dinheiro = prompt("Informe a quantidade inicial de Dinheiro: ");
dinheiro = parseFloat(dinheiro);
let opcao = " ";

do {
  opcao = prompt(
    "Saldo disponível: R$ " +
      dinheiro +
      "\nEscolha uma opção: " +
      "\n1. Adicionar Dinheiro" +
      "\n2. Subtrair Dinheiro" +
      "\n3. Sair"
  );

  switch (opcao) {
    case "1":
      dinheiro += parseFloat(prompt("Informe o valor a ser adicionado: "));
      break;
    case "2":
      dinheiro -= parseFloat(prompt("Informe o valor a ser subtraido: "));
      break;
    case "3":
      alert("Você escolheu sair");
      alert("saindo...");
      break;
    default:
      alert("Opção Invalida");
  }
} while (opcao !== "3");
