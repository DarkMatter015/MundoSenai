const db = require("./db");

async function Get(){
    try{
        // console.log('iniciando conexao')
        // await db.client.connect()
        // console.log('conexao bem sucedida')
        const res = await db.client.query('select * from "cadastro" ORDER BY id DESC ')
        console.log('Database pegada!')
        const tabela = res.rows
        return tabela
    } 
    catch (ex){
        console.log('Erro no Post: ' + ex)
    }
    finally{
        // await db.client.end()
        // console.log('Cliente desconectado')
    }}

module.exports = Get