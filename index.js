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
    // mensagem de erro
    let msgError = document.querySelector("#msg-error");
    // adiciona a classe para ela aparecer sua animação
    msgError.classList.add("aparece");
    //    altera o conteúdo da mensagem
    msgError.textContent = "Por favor, insira uma tarefa!";
  } else {
    //   cria um elemento li
    let liElement = document.createElement("li");

    // elemento checkbox
    let checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";

    // adiciona o checkbox ao li
    liElement.appendChild(checkboxElement);

    // valor do input
    let valorInput = inputElement.value;

    // adiciona o checkbox e valor do input ao li
    liElement.innerHTML = `${checkboxElement.outerHTML} ${valorInput}`;

    // adiciona o li ao ul
    ulElement.appendChild(liElement);

    // limpa o input
    inputElement.value = "";

    // mensagem de adicionado
    let msgError = document.querySelector("#msg-error");
    // adiciona a classe para ela aparecer sua animação
    msgError.classList.add("aparece");
    //    altera o conteúdo da mensagem
    msgError.textContent = "Tarefa adicionada!";
    msgError.style.color = "#05f0f8";
  }
});

// evento de click no checkbox
ulElement.addEventListener("click", (event) => {
  // verifica se o elemento clicado é um checkbox
  if (event.target.type === "checkbox") {
    // remove o li
    event.target.parentElement.remove();
  }
});
