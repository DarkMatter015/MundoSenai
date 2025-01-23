const db = require("./db");

async function Get(){
    try{
        console.log('iniciando conexao')
        const res = await db.query('select * from cadastro ORDER BY id DESC ')
        console.log('Leitura concluída com sucesso:', res.rowCount, 'registro(s) encontrado(s).');
        return res.rows;
    } catch (error) {
        console.error('Erro ao ler dados:', error);
        throw error;
    }
}

module.exports = Get