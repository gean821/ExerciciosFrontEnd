//Criar um campo de input para título e corpo do post.
//Botão para "Enviar post" que faz uma requisição POST.
//Ao carregar a página, mostrar os 5 primeiros posts (requisição GET).

const button = document.querySelector("#buttonSend");

function sendButton() {
    const obj = {
        title : document.querySelector('#postTitle').value.trim(),
        bodyText : document.querySelector('#inputBody').value.trim()
    };

    if (obj.title === ''  || obj.bodyText === '') {
        alert("informe um titulo ou texto.");
        return;
    }

    localStorage.setItem('obj', JSON.stringify(obj));
    const json = convertToJson(obj);
    console.log(json);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
        'Content-type' : 'application/json; charset=UTF-8'
    },
    body: json
})
    .then(response => response.json())
    .then(posts => {
        const postList = document.querySelector('#postList');
        let createdPost = document.createElement('li');
        createdPost.innerHTML = "Titulo : "+ posts.title + "<br>Texto : " + posts.bodyText;
        postList.appendChild(createdPost);
    })
    .catch(error => {
        console.log("Error while trying to fetch data.", error);
    });
}



document.addEventListener("DOMContentLoaded", function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response =>response.json())
    .then(posts => {
        const postList = document.querySelector('#postList');
        posts.slice(0,5).forEach(post => {
            let createdPost = document.createElement('li');
            createdPost.innerHTML = "Titulo : "+ post.title + " Texto : <br>" + post.bodyText;
            postList.appendChild(createdPost)
    })
    .catch(error =>
        console.log("error while trying to show created posts:", error));
})});


function convertToJson(obj) {
    return JSON.stringify(obj);
}

button.addEventListener('click', sendButton);
