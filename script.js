const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é IA?",
        alternativas: [
            {
                texto: "É um ramo da ciência que se concentra no desenvolvimento de sistemas e algoritmos capazes de realizar tarefas que normalmente exigem inteligência humana.",
            }
            
            "É o índice de aumento de expectativa de vida no mundo."
        ]
    },
    {
        enunciado: "Como a inteligência artificial pode ser útil no dia-a-dia?",
        alternativas: [
            "Com assistentes pessoais, casas inteligentes, na educação, na medicina, nas empresas e na indústria.",
            "Levando café da manhã na sua cama."
        ]
    },
    {
        enunciado: "Quais são os 3 pilares da IA?",
        alternativas: [
            "Tecnologia, cultura, vendas.",
            "Culinária, moda, artes marciais."
        ]
    },
    {
        enunciado: "Qual o principal objetivo da IA?",
        alternativas: [
            "Extinguir a raça humana.",
            "Automatizar tarefas."
        ]
    },
    {
        enunciado: "Quais são os principais tipos de IA utilizados na indústria?",
        alternativas: [
            "Aprendizado de máquina, processamento de linguagem natural, visão computacional e robótica inteligente.",
            "A IA não é utilizada na indústria."
        ]
    }
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta()
