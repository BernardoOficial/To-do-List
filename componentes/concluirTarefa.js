function BotaoConclui() {

    let button = document.createElement('button');
    button.classList.add('check-button')
    button.textContent = 'Concluir';

    button.addEventListener('click', concluirTarefa);

    return button;
}

function concluirTarefa(evento) {

    const botao = evento.target;
    const div = botao.parentElement;
    const tarefa = div.parentElement;
    tarefa.classList.toggle('done');
}

export default BotaoConclui;