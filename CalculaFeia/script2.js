function colectN1() {
    let n1 = parseFloat(document.querySelector('#numero1').value);
    return n1;
}

function colectN2() {
    let n2 = parseFloat(document.querySelector('#numero2').value);
    return n2;
}

const botao1 = document.querySelector('.b1');
const botao2 = document.querySelector('.b2');
const botao3 = document.querySelector('.b3');
const botao4 = document.querySelector('.b4');

function somar() {
    let resultado = colectN1() + colectN2();
    document.querySelector('#resultado').textContent = resultado;
}

botao1.addEventListener("click", somar);



function multiplicar() {
    let resultado = colectN1() * colectN2();
    document.querySelector('#resultado').textContent = resultado;
}

botao4.addEventListener("click", multiplicar);



function dividir() {
    let n1 = colectN1();
    let n2 = colectN2();
    if (n2 ===0) {
        document.querySelector('#resultado').textContent = "Divisao por zero não permitida.";
    }else {
        document.querySelector('#resultado').textContent = n1/n2;
    }
}


botao2.addEventListener("click",dividir);

function subtrair() {
    let resultado = colectN1() - colectN2();
    document.querySelector('#resultado').textContent = resultado;
}

botao3.addEventListener("click", subtrair);