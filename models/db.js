const Client = require('pg').Client
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Cadastro',
    password: 'admin123',
    port: 5432,
})

module.exports = {
    Client: Client,
    client: client
}
// Criar conexao com o banco
    // client.connect() 
    // client.query('select * from Cadastro')
    // .then(results => {
    //     const resultado = results.rows
    //     console.table(resultado)
    // })
    // .finally(() => client.end())

const ObterVisitantes = async () => {
    await client.connect()
//     // const res = await client.query('Select * from Cadastro')
//     // console.table(res.rows)
//     // await client.end()
}

ObterVisitantes().then((res) => {
    console.log("BANCO FUNCIONA!")
}).catch(erro => {
    console.log('Ocorre o erro: ' + erro)
})