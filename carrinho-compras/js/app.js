
let totalGeral;
limpar();
limparQuantidade();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]
    let valorUnitario = produto.split('R$')[1]
    let quantidade = document.getElementById('quantidade').value;
    let subTotal = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML +`<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;
    totalGeral = totalGeral + subTotal;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = `R$ ${totalGeral}`
    limparQuantidade();
}
function limparQuantidade(){
    document.getElementById('quantidade').value = '1';
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    totalGeral = 0;
    limparQuantidade();
}
