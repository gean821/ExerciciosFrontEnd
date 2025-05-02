const botao = document.querySelector('#button');

function buttonAction() {
    const login = { 
        login : document.querySelector('#usuario').value,
        senha : document.querySelector('#senha').value}; 
    console.log(login);

    const json = convertToJson(login);
    imprimirJson(json);
}


function convertToJson(obj) {
    return JSON.stringify(obj);  //pego ele e converto o objeto para Json.
}

function imprimirJson(json) {
    const impressao = document.querySelector('.impressao');
    let h2 = document.createElement('h2');
    h2.textContent = json;
    impressao.appendChild(h2);
}

botao.addEventListener('click', buttonAction);



