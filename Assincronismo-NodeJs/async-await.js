//Assincronismo - async-await

const fs = require('fs')

async function criarArquivo() {
    let conteudo = "Rafael cabral Kfouri\nExemplo async e await"
    await gravarArquivo("teste.txt", conteudo)
}

async function gravarArquivo(path, conteudo) {
    try {
        await fs.promises.writeFile(path, conteudo)
        console.log('arquivo gravado com sucesso')
    } catch (error) {
        console.log(error)
    }
}
console.clear()
criarArquivo()