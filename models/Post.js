const db = require("./db");

async function Post(nome, telefone, email, idade){
    try{
        // console.log('iniciando conexao')
        // await db.client.connect()
        // console.log('conexao bem sucedida')
        const res = await db.client.query('insert into "public".cadastro("nome", "telefone", "email", "idade") values ('+"'"+nome+"', '"+telefone+"', '"+email+"', '"+idade+"');")
        // console.table(res)
        
    } 
    catch (ex){
        console.log('Erro no Post: ' + ex)
    }
    finally{
        // await db.client.end()
        // console.log('Cliente desconectado')
    }}

module.exports = Post
