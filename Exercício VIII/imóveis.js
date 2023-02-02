const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem-vindo ao cadastro de imóveis!" +
      "\nTotal de imóveis cadastrados: " +
      imoveis.length +
      "\n\nEscolha uma opção: \n1. Novo imóvel \n2. Lista de imóveis \n3. Sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:");
      imovel.quartos = prompt("Quantos quartos possui o imóvel?");
      imovel.banheiros = prompt("Quantos banheiros possui o imóvel?");
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)");

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui Garagem? " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel alvo com sucesso!");
      } else {
        alert("Voltando ao Menu.");
      }

      break;

    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui Garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando...");
    default:
      alert("escolha outra opção");
  }
} while (opcao !== "3");
