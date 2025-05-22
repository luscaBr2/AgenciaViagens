// Script para mudar o tema das páginas, de modo que o usuário possa escolher 
// entre tema claro e tema escuro e o navegador lembre a escolha do usuário

const body = document.body;
let checkboxTema = document.getElementById("checkbox-tema");

// recolhe o tema salvo caso exista
let temaSalvo = localStorage.getItem("tema");

if (temaSalvo == null) {
  // se não existir um tema salvo, considere o tema claro
  temaSalvo = localStorage.setItem("tema", "claro");
} else {
  // se existir, aplique o tema salvo
  body.classList.add("tema-" + temaSalvo);

  // se o tema salvo for escuro, marque o checkbox
  // para que o usuário não precise clicar duas vezes
  if (temaSalvo == "escuro") {
    checkboxTema.checked = true;
  } else {
    checkboxTema.checked = false;
  }
}

function mudarTema() {
  checkboxTema = document.getElementById("checkbox-tema"); // atualiza a variavel ao clicar

  if (checkboxTema.checked) {
    body.classList.add("tema-escuro");
    temaSalvo = localStorage.setItem("tema", "escuro");
  } else {
    body.classList.remove("tema-escuro");
    temaSalvo = localStorage.setItem("tema", "claro");
  }
}
