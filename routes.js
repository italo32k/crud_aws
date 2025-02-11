import express from 'express';
import BibliotecaControllers from './controllers/BibliotecaControllers.js'; // Certifique-se de incluir a extensão .js

export const routes = express.Router();
routes.get('/biblioteca', BibliotecaControllers.buscarTodos)
routes.get('/result-page/:codigo', BibliotecaControllers.buscarUm)
routes.post('/submit-form', BibliotecaControllers.inserir)
routes.put('/biblioteca/:codigo', BibliotecaControllers.alterar)
routes.delete('/biblioteca/:codigo', BibliotecaControllers.excluir)