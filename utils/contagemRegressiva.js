// script para contagem regressiva em js puro, sem jquery ou bootstrap

// fonte: https://www.youtube.com/watch?v=nMn2_5kvbHo
function startTimer(duration, display) {
  var timer = duration,
    days,
    hours,
    minutes,
    seconds;

  // setInterval serve para executar algum comando em X milisegundos, indicados no fim do bloco
  setInterval(function () {
    days = parseInt(timer / (60 * 60 * 24), 10);
    hours = parseInt((timer % (60 * 60 * 24)) / (60 * 60), 10);
    minutes = parseInt((timer % (60 * 60)) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    // se os dias/horas/minutos/segundos forem menor que 10, concatenar com um zero atrás
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // constrói o texto que será exibido na var display
    display.textContent =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    // tira 1 do timer, se for menor que zero
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000); /* esse 1000 é de ms, ou seja, 1000 ms = 1 seg */
}

//window.onload serve para executar X função assim que a página carregar
window.onload = function () {
  // só pra facilitar a edição do tempo
  var dias = 5;
  var horas = 15;
  var minutos = 47;
  var segundos = 42;

  var totalEmSegundos =
    dias * 24 * 60 * 60 + horas * 60 * 60 + minutos * 60 + segundos;

  // duration tem que ser informado em segundos
  var duration = totalEmSegundos;

  var display = document.querySelector("#contagem-regressiva"); // elemento pra exibir o timer

  startTimer(duration, display); // inicia a função
};
