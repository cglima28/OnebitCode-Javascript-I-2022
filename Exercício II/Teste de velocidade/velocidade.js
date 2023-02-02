const car1 = prompt("Insira o nome do primeiro carro");
const speed1 = prompt("Insira a velocidade do primeiro carro");
const car2 = prompt("Insira o nome do segundo carro");
const speed2 = prompt("Insira a velocidade do segundo carro");

const vel1 = parseFloat(speed1);
const vel2 = parseFloat(speed2);

if (vel1 > vel2) {
  alert(car1 + " é mais rápido do que o " + car2);
} else if (vel1 < vel2) {
  alert(car2 + " é mais rápido do que o " + car1);
} else {
  alert(car1 + " e " + car2 + " possuem a mesma velocidade ");
}
