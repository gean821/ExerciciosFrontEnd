const botaoSim = document.getElementById("yesButton");
const botaoNao = document.getElementById("noButton");

// Adicionando eventos sem precisar de onclick no HTML //mais recomendado, não é bom misturar js com html lá com onclick



function botaoSimFunction() {
    alert("Sabia que vc ia querer. Aqui está o meu telefone : (44) 99751-0441");   
}
botaoSim.addEventListener("click", botaoSimFunction);


function botaoNaoFunction() {
    let resposta = prompt("Tem certeza mesmo ? (sim/nao)");
    while (resposta.toLowerCase() != "nao" ) {
        alert("Vc vai sim, aqui está meu numero, me chame rs (44) 99751-0441");
        resposta = prompt("tem certeza mesmo ? ");
        if (resposta.toLowerCase() === "nao") {
            alert("perfeito, vou te chamar!!");
        }
    }
    
}

botaoNao.addEventListener("click", botaoNaoFunction);

