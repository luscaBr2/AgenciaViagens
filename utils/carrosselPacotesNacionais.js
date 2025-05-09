// Script destinado a criar um carrossel de cards de pacotes nacionais
// de modo que ao clicar na seta para a direita, o carrossel avance
// e ao clicar na seta para a esquerda, o carrossel retorne
// ao chegar no final, ele volta para o início

const carrosselCardsNacionais = document.getElementById(
  "carrosselCardsNacionais"
);

function scrollCarrosselNacional(direction) {
  const maxScrollLeft =
    carrosselCardsNacionais.scrollWidth - carrosselCardsNacionais.clientWidth;

  if (
    direction === 1 &&
    Math.ceil(carrosselCardsNacionais.scrollLeft) >= maxScrollLeft
  ) {
    carrosselCardsNacionais.scrollTo({ left: 0, behavior: "smooth" });
  } else if (direction === -1 && carrosselCardsNacionais.scrollLeft <= 0) {
    carrosselCardsNacionais.scrollTo({
      left: maxScrollLeft,
      behavior: "smooth",
    });
  } else {
    carrosselCardsNacionais.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  }
}
