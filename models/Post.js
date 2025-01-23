const db = require("./db");

async function Post(nome, telefone, email, idade){
    try {
        console.log('Iniciando inserção no banco de dados...');
        const query = `
            INSERT INTO cadastro (nome, telefone, email, idade)
            VALUES ($1, $2, $3, $4)
        `;
        const values = [nome, telefone, email, idade];
        const res = await db.query(query, values);
        console.log('Inserção concluída com sucesso:', res.rowCount, 'linha(s) afetada(s).');
    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        throw error;
    }
}

module.exports = Post