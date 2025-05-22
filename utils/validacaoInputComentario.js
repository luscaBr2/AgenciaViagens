// script para validar o input de comentarios na página de contatos
// se o campo de nome estiver vazio, adiciona a classe "input-invalido", alterando o estilo do input

document
  .querySelector(".input-contato-avaliacao")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Seleciona os campos de nome e telefone
    const nomeInputComentario = document.getElementById("nomeComentario");

    const estrelas = [];

    for (let i = 1; i <= 5; i++) {}

    let isValid = true;

    // Limpa as classes de erro anteriores
    nomeInputComentario.classList.remove("input-invalido");

    //condição para o campo de nome de contato
    if (nomeInputComentario.value.trim() === "") {
      nomeInputComentario.classList.add("input-invalido"); // Adiciona a classe de erro
      isValid = false; // Marca como inválido
    }

    // Se todos os campos estiverem válidos, envie o formulário
    if (isValid) {
      alert("Comentário enviado com sucesso!");
      this.submit(); // Envia o formulário
    } else {
      alert("Por favor, preencha os campos obrigatórios.");
    }
  });
