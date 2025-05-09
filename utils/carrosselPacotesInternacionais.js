// Script destinado a criar um carrossel de cards de pacotes internacionais
// de modo que ao clicar na seta para a direita, o carrossel avance
// e ao clicar na seta para a esquerda, o carrossel retorne
// ao chegar no final, ele volta para o início

const carrosselCardsInternacionais = document.getElementById(
  "carrosselCardsInternacionais"
);

function scrollCarrosselInternacional(direction) {
  const maxScrollLeft =
    carrosselCardsInternacionais.scrollWidth -
    carrosselCardsInternacionais.clientWidth;

  if (
    direction === 1 &&
    Math.ceil(carrosselCardsInternacionais.scrollLeft) >= maxScrollLeft
  ) {
    carrosselCardsInternacionais.scrollTo({ left: 0, behavior: "smooth" });
  } else if (direction === -1 && carrosselCardsInternacionais.scrollLeft <= 0) {
    carrosselCardsInternacionais.scrollTo({
      left: maxScrollLeft,
      behavior: "smooth",
    });
  } else {
    carrosselCardsInternacionais.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  }
}
