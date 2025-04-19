const Botao = document.querySelector('#add');
const input = document.querySelector('#input');
const lista = document.querySelector('#list');
let array = []; //criando um array para usar na lista agora.          

   array.push(valor);
   console.log(array); 
   acaoBotao();




function acaoBotao() {
    if (valor !== "") {
       const li = document.createElement('li');
        li.textContent = valor;
        lista.appendChild(li);
        input.value = "";    
    }else {
        alert("Não é possível adicionar um item vazio.");
    }
}


function output() {
    for (let i =0; i< array.length; i++) {
        let li = createElement('li');
    }

}

Botao.addEventListener('click', acaoBotao);

