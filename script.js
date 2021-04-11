function exibirSobre(){
    var conteudo = document.querySelector('#conteudo')
    var textoSobre = "Meu nome é Karen. Tenho 20 anos e estou no quinto semestre do curso de Ciência da Computação"
    var html = "<p>"+ textoSobre + "</p>"
    conteudo.innerHTML =  html

}


function exibirLinks(){
    var conteudo = document.querySelector('#conteudo')
    var links = ['<a href="https://github.com/karengiovanna"> Github</a></br>', 
    '<a href="https://www.facebook.com/karengiovannamelo"> Facebook</a>']
    conteudo.innerHTML = links[0]
    conteudo.innerHTML += links[1]
}
function exibirProjetos(){
    var conteudo = document.querySelector('#conteudo')
    var projetos = "<h2>Front-end </h2> <ol><li> 💰 Conversor de moedas</li><li> 🔢 Calculadora </li><li> 🔮 Mentalista</li><li> <a href='https://codepen.io/karengiovanna/pen/dyNpLob'>🎬 AluraFlix </a></li><li> 🏆 Tabela de classificação</li><li> 🃏 Supertrunfo </li><li> <a href='https://karengiovanna.github.io/'>🌐 Certificard</a></li></ol><h2>Back-end</h2> "
    conteudo.innerHTML =  projetos

}

function exibirExperiencias(){
    var conteudo = document.querySelector('#conteudo')
    var projetos = "<h2>Experiências </h2> <ol><li> 💰 Analista de infraestrutura de TI na Secretária de Saúde do Estado de Roraima (2019-2020)</li><li> 🔢 Analista de suporte de TI no Tribunal de Contas do Estado de Roraima (2021)</li></ol>"
    conteudo.innerHTML =  projetos

}

function exibirConhecimentos(){
    var conteudo = document.querySelector('#conteudo')
    var projetos = "<h2>Conhecimentos</h2> <ol><li> 💰 Lógica Proposicional</li><li> 🔢 Algoritmos </li><li> 🔮 Programação Estruturada</li><li> 🎬 Programação Orientada A Objetos </li><li> 🏆 Engenharia de Software </li><li> 🃏 Estrutura de Dados I </li><li> 🌐 Cálculo</li></ol>"
    conteudo.innerHTML =  projetos

}

function exibirInteresses(){
    var conteudo = document.querySelector('#conteudo')
    var projetos = "<h2>Front-end </h2> <h2>Back-end</h2> <a href='https://www.urionlinejudge.com.br/judge/pt/profile/260337'><h2>Programação Competitiva</h2></a> "
    conteudo.innerHTML =  projetos

}