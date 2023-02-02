const atacante = prompt("Qual é o nome do personagem atacante?");
const poderAtaque = prompt("Qual é o seu poder de ataque?");
const defensor = prompt("Qual é nome do personagem defensor?");
let pontosVida = prompt("Quantos pontos de vida ele possui?");
const poderDefesa = prompt("Qual é o seu poder de defesa?");
const escudo = prompt("Ele possui um escudo? (Sim/Não)");

let danoCausado = 0;

if (poderAtaque > poderDefesa && escudo === "não") {
  danoCausado = poderAtaque - poderDefesa;
} else if (poderAtaque > poderDefesa && escudo === "sim") {
  danoCausado = (poderAtaque - poderDefesa) / 2;
}

pontosVida -= danoCausado;

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor);
alert(
  atacante +
    "\nPoder de ataque: " +
    poderAtaque +
    "\n\n" +
    defensor +
    "\nPontos de vida: " +
    pontosVida +
    "\nPoder de defesa: " +
    poderDefesa +
    "\nPossui escudo: " +
    escudo
);
