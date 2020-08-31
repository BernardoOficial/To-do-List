import deletarTarefaNoLocalStorage from '../script.js';

function BotaoExclui() {

    let button = document.createElement('button');
    button.classList.add('delete-button');
    button.textContent = 'Excluir';

    button.addEventListener('click', removerTarefa);

    return button;
}

function removerTarefa(evento) {

    const botao = evento.target;
    const div = botao.parentElement;
    const tarefa = div.parentElement;
    const p = tarefa.firstElementChild.textContent;

    deletarTarefaNoLocalStorage(p);

    tarefa.remove();
}

export {
    BotaoExclui,
    removerTarefa
}