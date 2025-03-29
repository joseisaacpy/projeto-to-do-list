// input
let inputElement = document.querySelector("input");

// ul
let ulElement = document.querySelector("ul");

// form
let formElement = document.querySelector("form");
// evento de submit do form
formElement.addEventListener("submit", (event) => {
  // previne o envio do form padrão e o recarregamento da página
  event.preventDefault();

  // verifica se o input está vazio
  if (inputElement.value === "") {
    let msgError = document.querySelector("#msg-error");
    msgError.textContent = "Por favor, insira uma tarefa!";
  } else {
    //   cria um elemento li
    let liElement = document.createElement("li");

    // valor do input
    let valorInput = inputElement.value;

    // adiciona o valor do input ao li
    liElement.textContent = valorInput;

    // adiciona o li ao ul
    ulElement.appendChild(liElement);

    // limpa o input
    inputElement.value = "";
  }
});
