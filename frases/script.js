function novaFrase(){

let frases = [

"O sucesso é a soma de pequenos esforços repetidos todos os dias.",

"A disciplina é a ponte entre metas e conquistas.",

"Você é mais forte do que imagina.",

"Grandes resultados começam com pequenas decisões.",

"Persistência sempre vence o talento que desiste."

]

let numero = Math.floor(Math.random() * frases.length)

document.getElementById("frase").innerText = frases[numero]

}