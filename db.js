import pkg from 'pg';
const { Pool } = pkg;

import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT 
});

const createTable = async () => {
  const checkQuery = `
    SELECT EXISTS (
      SELECT 1 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'biblioteca'
    );
  `;

  const createQuery = `
    CREATE TABLE biblioteca (
      codigo SERIAL PRIMARY KEY,
      titulo VARCHAR(50) NOT NULL,
      autor VARCHAR(50) NOT NULL
    );
  `;

  try {
    const client = await pool.connect();
    
    // Verifica se a tabela existe
    const res = await client.query(checkQuery);
    const exists = res.rows[0].exists;

    if (exists) {
      console.log('A tabela "biblioteca" já existe.');
    } else {
      // Se não existir, cria a tabela
      await client.query(createQuery);
      console.log('Tabela "biblioteca" criada com sucesso!');
    }
    
    client.release();
  } catch (err) {
    console.error('Erro ao verificar/criar a tabela:', err);
  }
};

createTable();

export default pool;
