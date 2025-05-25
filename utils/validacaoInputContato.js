// script para validar o input de contato na página de contatos
// se o campo de nome e telefones estiverem vazios, adiciona a classe de erro, alterando o estilo do input

document
  .querySelector(".input-contato")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Seleciona os campos de nome e telefone
    const nomeInputContato = document.getElementById("nomeContato");
    const telefoneInput = document.getElementById("telefone");
    let isValid = true;

    // Limpa as classes de erro anteriores
    nomeInputContato.classList.remove("input-invalido");
    telefoneInput.classList.remove("input-invalido");

    //condição para o campo de nome de contato
    if (nomeInputContato.value.trim() === "") {
      nomeInputContato.classList.add("input-invalido"); // Adiciona a classe de erro
      isValid = false; // Marca como inválido
    }

    // Valida o campo de telefone
    if (telefoneInput.value.trim() === "") {
      telefoneInput.classList.add("input-invalido"); // Adiciona a classe de erro
      isValid = false; // Marca como inválido
    }

    // Se todos os campos estiverem válidos, envie o formulário
    if (isValid) {
      alert("Formulário enviado com sucesso!");
      this.submit(); // Envia o formulário
    } else {
      alert("Por favor, preencha os campos obrigatórios.");
    }
  });
