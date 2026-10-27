let perguntas = [
    "Você conhece a vítima?",
    "Você esteve no local do crime?",
    "Você conseguia chegar ao local do crime?",
    "Você esteve com a vítima no dia do crime?",
    "Você sabia que a vítima estaria naquele local?",
    "Você entrou em contato com a vítima no dia do ocorrido?",
    "Você pode reconhecer algum objeto encontrado no local?",
    "O seu depoimento bate com os horários marcados nas cameras?",
    "Você conhece alguém envolvido neste ocorrido?",
    "Você pode confirmar aonde estava quando a vítima foi assassinada?"
]
let respostas = [];
let atual = 0;
mostrapergunta()
function mostrapergunta(){
    document.getElementById("pergunta").innerHTML = perguntas[atual];
    document.getElementById("numero").innerHTML = "pergunta" + (atual + 1);
}
function responder() {
    let resposta = document.getElementById("resposta").value;
    if (resposta == "") {
        alert("escolha uma resposta!");
        return;
    }
    resposta[atual] = resposta;
    atual++;
    document.getElementById("resposta").value = "";

    if (atual < perguntas.length) {
        mostrapergunta();
    } else {
        resultado();
    }
}

function resultado() {
    let pontos = 0;
    if (respostas[0] != respostas[5]) pontos++;
    if (respostas[1] != respostas[6]) pontos++;
    if (respostas[2] != respostas[7]) pontos++;
    if (respostas[3] != respostas[8]) pontos++;
    if (respostas[4] != respostas[9]) pontos++;

    let mensagem = "";
    switch (pontos) {
        case 0:
            mensagem = "As respostas não são capazes de te incriminar pelo crime."
            break;
        case 1:
            mensagem = "As respostas encontradas te consideram um suspeito pelo crime"
            break;
        case 2:
            mensagem = "Suas respostas indicam cumplicidade sobre o crime."
        default:
            mensagem = "OBJECTION!!! Patrik Jane te pegou seu fujão, CULPADO!"
    }
    document.getElementById("pergunta").innerHTML = mensagem;
    document.getElementById("numero").innerHTML = "Fim do interrogatório";

    document.getElementById("resposta").style.display = "none";
    document.getElementById("button").style.display = "none";
    document.getElementById("reiniciar").style.display = "inline-block";
}
function reiniciarjogo() {
    location.reload();
}