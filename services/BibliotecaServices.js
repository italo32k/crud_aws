import db from '../db.js';

const buscarTodos = () => {
  return new Promise((resolve, reject) => {

    db.query('SELECT * FROM biblioteca', (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results.rows);
    });
  });
};

const buscarUm = (codigo) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM biblioteca WHERE codigo = $1', [codigo], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      if (results.rows.length > 0) {
        resolve(results.rows[0]);
      } else {
        resolve(null); 
      }
    });
  });
};

const inserir = (titulo, autor) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO biblioteca (titulo, autor) VALUES ($1, $2) RETURNING codigo', [titulo, autor], (error, results) => {
      if (error) { reject(error); return; }
      resolve(results.rows[0].codigo);
    });
  });
};

const alterar = (codigo, titulo, autor) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE biblioteca SET titulo = $1, autor = $2 WHERE codigo = $3 RETURNING codigo', [titulo, autor, codigo], (error, results) => {
      if (error) { reject(error); return; }
      resolve(results.rows[0].codigo);
    });
  });
};

const excluir = (codigo) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM biblioteca WHERE codigo = $1', [codigo], (error, results) => {
      if (error) { reject(error); return; }
      resolve(true);
    });
  });
};

export default {
  buscarTodos,
  buscarUm,
  inserir,
  alterar,
  excluir
};
