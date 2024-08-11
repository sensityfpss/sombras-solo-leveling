/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
passo 1 - dar um jeito de pegar o elemento HTML dos botões
passo 2 - dar um jeito de identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem anteriormente selecionada
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
passo 7 - esconder a informação do dragão anteriormente selecionado
passo 8 - mostrar a informação do dragão referente ao botão clicado
*/
//- passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoescarrosel = document.querySelectorAll(".botao");
const imagems = document.querySelectorAll(".imagem")
const informacao = document.querySelectorAll(".informacao")

//- passo 2 - dar um jeito de identificar o clique do usuário no botão
botoescarrosel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //- passo 3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector(".selecionado");

        botaoSelecionado.classList.remove("selecionado");

        //- passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add("selecionado");

        //- passo 5 - esconder a imagem anteriormente selecionada
        const imagemativa = document.querySelector(".ativa");
        imagemativa.classList.remove("ativa")

        //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        imagems[indice].classList.add("ativa");

        //- passo 7 - esconder a informação do dragão anteriormente selecionado
        const informacaoativa = document.querySelector(".informacao.ativa");
        informacaoativa.classList.remove("ativa")

        //- passo 8 - mostrar a informação do dragão referente ao botão clicado
        informacao[indice].classList.add("ativa");
    })
})

