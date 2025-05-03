//Permitir que o usuário cadastre nome e email, exiba os dados em tela no formato JSON e mostre uma mensagem de validação se algum campo estiver vazio.
const button = document.querySelector('#registerButton');
const cleanButton = document.querySelector('#cleanButton');


function buttonAction() {
    Event.preventDefault();

    const login = {
        user : document.querySelector('#name').value.trim(),
        email : document.querySelector('#email').value.trim()
    };

    if (login.user === '' || login.email === '') {
        alert("Please fill in all fields to login");
        return;
    }
    
    localStorage.setItem("login",JSON.stringify(login));
    const json = convertToJson(login);
    console.log(json);
    
    printJson(json);
    document.querySelector('#name').value = '';   //limpando o input após preenchimento para ficar clean
    document.querySelector('#email').value = '';

}

document.addEventListener("DOMContentLoaded", function() {
    const savedLogin = localStorage.getItem("login");
    
    if (savedLogin) {
        const print = document.querySelector('#usersList');
        const li = document.createElement('li');
        li.textContent = savedLogin; 
        print.appendChild(li);
    }
});

function convertToJson(login) {
    return JSON.stringify(login);
}

function printJson(json) {
    const print = document.querySelector('.loginRegisters');
    const h4 = document.createElement('h4');
    h4.textContent = json;
    print.appendChild(h4);
}

function clearData() {
    localStorage.clear();
    const userList = document.querySelector('#usersList');
    userList.textContent = '';
}


button.addEventListener('click', buttonAction);
cleanButton.addEventListener('click', clearData);



