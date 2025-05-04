//fazendo requisição Get para pegar os 5 primeiros Posts.

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json()) //convertendo a resposta em JSON;
.then(posts => {
    const postList = document.querySelector('#postList');

    posts.slice(0,5).forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.id + post.title;
        postList.appendChild(li);
    });
})
.catch(error => {
    console.error("Error while loading posts.", error);
});