function criaDivs() {
    const quadrados = document.querySelector('#quadrados');
    for (let i = 0; i<30;i++) {
        const novaCasa = document.createElement('div');
        novaCasa.id = `casa${i+1}`;
        novaCasa.classList.add("casa");
        quadrados.appendChild(novaCasa);
        
    }
}

let posicaoAtual = 0;
function escreveLetra(letra) {
    const casas = document.querySelectorAll('.casa');
    if (posicaoAtual < casas.length) {
        casas[posicaoAtual].innerText = letra;
        posicaoAtual++;
    }
}

function adicionarEventosTeclado() {
    const botoes = document.querySelectorAll('.keyboard button');

    botoes.forEach(botao => {
        const letra = botao.innerText;
        if (letra.length === 1 && letra !== "DEL" && letra !== "ENTER") {
            botao.addEventListener('click', () => {
                escreveLetra(letra);
            });
        }
    });
}

criaDivs();
adicionarEventosTeclado();

