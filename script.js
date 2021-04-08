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
    var projetos = "<h2>Insignias da imersao.dev </h2> <ol><li> 💰 Conversor de moedas</li><li> 🔢 Calculadora </li><li> 🔮 Mentalista</li><li> 🎬 AluraFlix </li><li> 🏆 Tabela de classificação</li><li> 🃏 Supertrunfo </li><li> 🌐 Certificard</li></ol>"
    conteudo.innerHTML =  projetos

}