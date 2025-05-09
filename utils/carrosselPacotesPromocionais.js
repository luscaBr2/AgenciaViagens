// Script destinado a criar um carrossel de cards de pacotes promocionais
// de modo que ao clicar na seta para a direita, o carrossel avance
// e ao clicar na seta para a esquerda, o carrossel retorne
// ao chegar no final, ele volta para o início

const cardWidth = 350; // O quanto vai pra frente a cada clique
//350 pois é o tamanho do card

const carrosselCardsPromocionais = document.getElementById(
  "carrosselCardsPromocionais"
);

// direction = 1 (para frente) ou -1 (para trás)
function carrosselCardsPromocional(direction) {
  const maxScrollLeft =
    carrosselCardsPromocionais.scrollWidth -
    carrosselCardsPromocionais.clientWidth;

  if (
    direction === 1 &&
    Math.ceil(carrosselCardsPromocionais.scrollLeft) >= maxScrollLeft
  ) {
    carrosselCardsPromocionais.scrollTo({ left: 0, behavior: "smooth" });
  } else if (direction === -1 && carrosselCardsPromocionais.scrollLeft <= 0) {
    carrosselCardsPromocionais.scrollTo({
      left: maxScrollLeft,
      behavior: "smooth",
    });
  } else {
    carrosselCardsPromocionais.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  }
}
