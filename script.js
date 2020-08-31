import BotaoConclui from './componentes/concluirTarefa.js';
import { BotaoExclui, removerTarefa } from './componentes/removerTarefa.js';

const addTodo = document.querySelector('[data-atribute-button]');
const ul = document.querySelector('[data-atribute-lista]');
const input = document.querySelector('[data-atribute-input]');

let importancia;
let tarefas = JSON.parse(localStorage.getItem('Tarefas')) || {
    'Tarefa': [],
    'Cor': []
};

let cor = "";

const form = document.querySelector('[data-form]')
form.addEventListener('submit', submitForm);

function submitForm(evento) {

    evento.preventDefault();

    importancia = evento.target.importancia.value;
    // Para acessar o formulário devemos utilizar "evento.target", para acessar os campos do formulário devemos utilizar o "name"
    // do campo em questão e depois utilizar "value" para pegar o valor inserido no campo.

    addTarefa();
}


function importanciaDaTarefa(grau) {

    if (grau === "urgente") {
        cor = 'bordaLeftVermelha';
    }
    else if (grau === "semiUrgente") {
        cor = 'bordaLeftLaranja';
    }
    else {
        cor = 'bordaLeftAmarelo';
    }
}

function addTarefa() {

    importanciaDaTarefa(importancia); // Alterar a cor da borda conforme a urgência.

    let tarefa = input.value;
    input.value = '';

    let p;
    let li = document.createElement('li');
    let div = document.createElement('div');

    li.classList.add('task');
    li.classList.add(cor);

    p = `<p class="content">${tarefa}</p>`;
    li.innerHTML = p;

    div.appendChild(BotaoConclui());
    div.appendChild(BotaoExclui());
    li.appendChild(div);
    ul.appendChild(li);

    tarefas.Tarefa.push(tarefa);
    tarefas.Cor.push(cor);

    localStorage.setItem('Tarefas', JSON.stringify(tarefas));
}

function carregarTarefas() {

    let p;
    let li;
    let div;

    // fazer um for para exibir todos as tarefas
    for (let i = 0; i < tarefas.Tarefa.length; i++) {

        li = document.createElement('li');
        div = document.createElement('div');

        li.classList.add('task');
        li.classList.add(tarefas.Cor[i]);

        p = `<p class="content">${tarefas.Tarefa[i]}</p>`;
        li.innerHTML = p;

        div.appendChild(BotaoConclui());
        div.appendChild(BotaoExclui());
        li.appendChild(div);
        ul.appendChild(li);
    }
}

carregarTarefas();

function deletarTarefaNoLocalStorage(texto) {

    let index = tarefas.Tarefa.indexOf(texto);
    tarefas.Tarefa.splice(index, 1);
    tarefas.Cor.splice(index, 1);

    localStorage.setItem('Tarefas', JSON.stringify(tarefas));
}



export default deletarTarefaNoLocalStorage;