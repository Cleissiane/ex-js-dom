//Q1

function exibirFilhos() {
    const lista1 = document.querySelector('#lista');
    const ul = lista1.querySelector('ul');
    console.log(ul.children);
}

//Q2
function alteraItem() {
    const lista1 = document.querySelector('#lista1');
    const ul = lista1.querySelector('ul');
    let novoItem = "Item modificado";
    ul.children[1].innerText = novoItem;
}

//Q3
function adicionaItem() {
    const lista2 = document.querySelector('#lista2');
    lista2.innerHTML += "<li>Novo item</li>";
}

//Q4
function adicionarItem() {
    const ul = lista3.querySelector('ul');
    let addLi = document.createElement("li");
    addLi.innerHTML = ("Item criado dinamicamente");
    ul.appendChild(addLi);
}

//Q5
function mostrarSenha() {
    const input = document.querySelector('input');
    if (input.type === 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
}

//Q6
function corTexto() {
    const lista4 = document.querySelector('#lista4');
    const cor = lista4.querySelector('ul');
    cor.children[2].style.color = 'blue';
}

function textoNegrito() {
    const lista4 = document.querySelector('#lista4');
    const cor = lista4.querySelector('ul');
    cor.children[3].style.fontWeight = 'bold';
}

//Q7
function btBefore() {
    const lista5 = document.querySelector('#lista5');
    lista5.before('Texto Anterior');
}

function btAfter() {
    const lista5 = document.querySelector('#lista5');
    const after = lista5.querySelector('ul');
    lista5.after('Texto Posterior');
}





