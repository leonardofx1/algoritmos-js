

function saudacao(mensagem, name) {
 console.log(`${mensagem} olá ${name}`)
 console.log(this)

}
const bemvindo = saudacao.bind(null, 'Bom dia') 
bemvindo('leonardo')