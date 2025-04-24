const botao = document.querySelector('#buttonFunction');
const lista = document.querySelector('#ProductsList');

function showInputs() {
    const productName = document.querySelector('#productName').value;
    const productPrice = document.querySelector('#productPrice').value;
    const productQuantity = document.querySelector('#productQuantity').value;
    const produto = "Produto : " + productName + " Preço : " + productPrice + " Quantidade : " + productQuantity; //armazeno os dados em uma String porque são 3 atributos do input, do produto.
    
    let element = document.createElement('li');  //crio o elemento li.
    element.textContent = produto;  //o conteúdo de li é basicamente os atributos do produto.                              //fazendo sem uso de array seria assim.
    lista.appendChild(element); //adiciono na lista. 
}

botao.addEventListener("click", showInputs);





