let caixaimagem = document.querySelector(".big-glass")
let circulo = document.querySelector(".circle")

function trocaImagem(endereco) {
    caixaimagem.src = endereco
}

function trocaCor(cor) {
    circulo.style.background = cor
} 