const botao = document.querySelector('#buttonAdd');
const lista = document.querySelector('#ProductsList');
const botao2 = document.querySelector('#listItems')
const array = [];

function showInputs() {
    const productName = document.querySelector('#productName').value;
    const productPrice = document.querySelector('#productPrice').value;
    const productQuantity = document.querySelector('#productQuantity').value;
    
    let contentOfProduct = "Produto :  " +productName + " <br> Price : " + productPrice + " <br> Quantity : "+productQuantity;
    
        let li = document.createElement('li');
        li.innerHTML = contentOfProduct
        lista.appendChild(li);
        array.push(contentOfProduct); //usamos o push para empurrar para dentro do array essa variável.
    }


    function showProducts() {
        lista.innerHTML = "";
        for (let i = 0; i<array.length;i++) {
            let li = document.createElement('li');
            li.innerHTML = array[i];
            lista.appendChild(li);
        }

    }




botao.addEventListener("click",showInputs);
botao2.addEventListener("click",showProducts);


