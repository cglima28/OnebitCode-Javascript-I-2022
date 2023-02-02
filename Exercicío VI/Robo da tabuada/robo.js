const number = prompt("informe o número a ser multiplicado: ");

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += "->" + number + "*" + fator + "=" + number * fator + "\n";
}

alert("Resultado da tabuada de " + number + ":\n\n" + resultado);
