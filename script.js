//Q1

function exibirFilhos(){
    const lista1 = document.querySelector('#lista');
    const ul = lista1.querySelector('ul');
    console.log(ul.children);
}

//Q2
function alteraItem(){
    const lista1 = document.querySelector('#lista1');
    const ul = lista1.querySelector('ul');
    let novoItem = "Item modificado";
    ul.children[1].innerText = novoItem;
}

//Q3
function adicionaItem(){
    const lista2 = document.querySelector('#lista2');
    lista2.innerHTML += "<li>Novo item</li>";
}

//Q4
function adicionarItem(){
    const ul = lista3.querySelector('ul');
    let addLi = document.createElement ("li");
    addLi.innerHTML = ("Item criado dinamicamente");
    ul.appendChild(addLi);
}

//Q5
function mostrarSenha(){
    const input = document.querySelector('input');
    if (input.type === 'password'){
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }

}






