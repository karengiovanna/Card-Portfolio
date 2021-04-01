console.log("ligou o JS")

var filmes = ['https://m.media-amazon.com/images/M/MV5BNDJhYTk2MTctZmVmOS00OTViLTgxNjQtMzQxOTRiMDdmNGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR2,0,182,268_AL_.jpg']




function exibirMaiorSonho(){
    var sonho = "Ir a um show da Karol G"
    document.querySelector('#maiorSonho').innerHtml = sonho
    var maiorSonho = document.querySelector('#maiorSonho') //querySelector pega elementos do html
    maiorSonho.innerHTML =  sonho
}

function exibirSerie(){
    var series = ['https://m.media-amazon.com/images/M/MV5BYmMxNjM0NmItNGU1Mi00OGMwLTkzMzctZmE3YjU1ZDE4NmFjXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg']
    html = "<img src = '" + series[0]+"'>"
    document.querySelector('#maiorSonho').innerHtml = html
    var maiorSonho = document.querySelector('#maiorSonho') //querySelector pega elementos do html
    maiorSonho.innerHTML =  html
}