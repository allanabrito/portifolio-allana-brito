function gerarFrase(){

let frases = [

"Nunca desista de aprender algo novo.",
"Pequenos passos levam a grandes conquistas.",
"A prática leva à evolução.",
"Cada erro é uma oportunidade de aprender.",
"Persistência é o caminho do sucesso."

]

let numero = Math.floor(Math.random() * frases.length)

document.getElementById("frase").innerText = frases[numero]

}