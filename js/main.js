const btn = document.querySelector('#botao');
const dado = document.querySelector('#dado');
const exibirResultado = document.querySelector('#resultado');
let maiorNumero;

btn.addEventListener('click', (e) => {
    if (dado.value === "d4") {
        maiorNumero = 4;
    }
    if (dado.value === "d6") {
        maiorNumero = 6;
    }
    if (dado.value === "d8") {
        maiorNumero = 8;
    }
    if (dado.value === "d10") {
        maiorNumero = 10;
    }
    if (dado.value === "d12") {
        maiorNumero = 12;
    }
    if (dado.value === "d20") {
        maiorNumero = 20;
    }
    if (dado.value === "d100") {
        maiorNumero = 100;
    }
    const resultado = jogarDado(maiorNumero);
    exibirResultado.innerHTML = resultado;
    exibirResultado.style.display = "block";
})

function jogarDado(maior) {
    return Math.floor(Math.random() * maior) + 1;
}