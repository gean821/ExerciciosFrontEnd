const botao = document.querySelector('#button');
let desconto;

function showInformations() {
    const nomeProduto = document.querySelector('#input_1').value;
    const precoUnitario = parseFloat(document.querySelector('#input_3').value);
    const cupom = parseInt(document.querySelector('#input_4').value);
    const quantidade = parseInt(document.querySelector('#input_2').value);
    let valorTotal = precoUnitario*quantidade;
    let valorComDesconto = valorTotal;

    if (cupom >20) {
        let desconto = valorTotal *0.5;
        valorComDesconto = valorComDesconto - desconto;
    }else if (cupom>10 && cupom <50) {
        desconto = valorTotal*0.10;
        valorComDesconto = valorComDesconto -desconto;
    }

    document.querySelector('#resultado_1_Produto').textContent = "Nome do Produto : " +nomeProduto;
    document.querySelector('#resultado_2_precoUnitario').textContent = "Preço Unitário do Produto : "+precoUnitario;
    document.querySelector('#resultado_3_valorSemCupom').textContent = "Valor do item sem desconto : " + valorTotal
    document.querySelector('#Quantity').textContent = "Quantidade de Itens no carrinho : "  + quantidade;
    document.querySelector('#resultado_4_total').textContent = "Valor total da Compra com Desconto : " +valorComDesconto;
}

botao.addEventListener("click", showInformations);







