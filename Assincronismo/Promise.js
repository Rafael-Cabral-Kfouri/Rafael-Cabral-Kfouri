/* Assincronismo 
* Promise
*/

const read = require('readline-sync')

// Simulação de um banco de dados de usuários
const database = {
    admin: {
        usuario: "Administrador",
        senha: "password"
    },
    homem: {
        usuario: "Rafael Cabral Kfouri",
        senha: "123456"
    }
} 

// Autenticação de um usuário
console.clear()
console.log("-------------------------")
console.log(" USUÁRIO")
console.log("-------------------------")
let login = read.question("login: ")
let senha = read.question("senha: ")
console.log("-------------------------")
logar(login,senha)
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log("Erro de autenticação" + error)
})

//Função logar (autenticação do usuário) 
function logar(login,senha){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if (database.hasOwnProperty(login)) {
                if(database[login].senha === senha ) {
                    resolve("Autenticação bem sucedida! Olá " + database[login].usuario)
                }else{
                    reject ('Senha incorreta. Por favor tente novamente')
                }
            } else {
                reject ("usuário não encontrado por favor verifique o login")
            }
        },2000)
    })
}

/*Porque é necessário usar assincronismo para autenticação de um usuário? 
O sistema faz uma consulta ao banco de dados que leva um tempo e também pode ter sucesso ou falha.*/

//hasOwnProperty-->verifica dentro da estrtura se o login foi capaturado. O retorno é booleano e indica se a propriedade do objeto foi definida no proprio objeto ou foi herdada. 