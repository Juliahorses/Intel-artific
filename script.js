const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Selecione o personagem de sua aventura",
        alternativas: [
            {
                texto: "Um velho mago",
                afirmacao: "Era uma vez um velho mago que buscava justiça em seus deveres."
            },
            {
                texto: "Um bravo aventureiro",
                afirmacao: "Era uma vez um bravo aventureiro que buscava ação em suas aventuras."
            }
        ]
    },
    {
        enunciado: "O que o protagonista buscará em sua jornada?",
        alternativas: [
            {
                texto: "Um anel mágico",
                afirmacao: "Certo dia, recebe a tarefa de encontrar um anel mágico muito poderoso."
            },
            {
                texto: "Uma espada lendária",
                afirmacao: "Certo dia, recebe a tarefa de encontrar uma espada lendária muito antiga."
            }
        ]
    },
    {
        enunciado: "Quem o personagem encontrará no caminho para o auxiliar?",
        alternativas: [
            {
                texto: "Um duende",
                afirmacao: "No meio de sua jornada, ele encontra um duende verde que o auxilia na missão."
            },
            {
                texto: "Uma fada",
                afirmacao: "No meio de sua jornada, ele encontra uma fada que o auxilia na missão."
            }
        ]
    },
    {
        enunciado: "Qual será o inimigo enfrentado?",
        alternativas: [
            {
                texto: "Um dragão",
                afirmacao: "Ao encontrar o objeto perdido, os companheiros avistam um enorme e poderoso dragão que guardava o tesouro."
            },
            {
                texto: "Um tubarão",
                afirmacao: "Ao encontrar o objeto perdido, os companheiros avistam um tubarão que nadava no oceano em que estava o tesouro."
            }
        ]
    },
    {
        enunciado: "O inimigo é derrotado?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Com muito esforço e dedicação, a dupla invencível derrota o inimigo e recupera o estimado tesouro precioso, voltando para casa juntos logo em seguida. Com isso, continuam juntos se ajudando nas aventuras."
            },
            {
                texto: "Não",
                afirmacao: "O fortíssimo inimigo não dá chances para a dupla, que saem correndo desesperados e fim."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
