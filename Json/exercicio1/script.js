//Permitir que o usuário cadastre nome e email, exiba os dados em tela no formato JSON e mostre uma mensagem de validação se algum campo estiver vazio.
const button = document.querySelector('#registerButton');

function buttonAction() {
    const login = {
        user : document.querySelector('#name').value.trim(),
        email : document.querySelector('#email').value.trim()
    };
    if (login.user === '' || login.email === '') {
        alert("Please fill in all fields to login");
    }
    const json = convertToJson(login);
    console.log(json);
    printJson(json);
}

function convertToJson(login) {
    return JSON.stringify(login);
    
}

function printJson(json) {
    const print = document.querySelector('.loginRegisters');
    const h4 = document.createElement('h4');
    h4.textContent = json;
    print.appendChild(h4);
}


button.addEventListener('click', buttonAction);



