import { NegociacaoController } from "./controllers/NegociacaoController.js";
const formulario = document.querySelector(".form");
const negociacao1 = new NegociacaoController;
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    negociacao1.atualiza();
    console.log(negociacao1);
});
