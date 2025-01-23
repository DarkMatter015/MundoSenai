const {Pool} = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '12345',
    port: 5432,
})

async function tabelaExiste(){
    const criateTable = `CREATE TABLE IF NOT EXISTS cadastro (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        telefone VARCHAR(15),
        email VARCHAR(255),
        idade INT
        );
        `;
        try {
            console.log('Verificando existência da tabela "cadastro"...');
            await pool.query(criateTable);
            console.log('Tabela "cadastro" pronta para uso.');
        } catch (error) {
            console.error('Erro ao verificar/criar tabela: ', error);
            throw error;
        }
}

tabelaExiste();

module.exports = pool;