import BibliotecaServices from '../services/BibliotecaServices.js'; // Adicione a extensão .js

const buscarTodos = async (req, res) => {
    let json = {error:'', result:[]};

    try {
        let biblioteca = await BibliotecaServices.buscarTodos();

        for (let i in biblioteca) {
            json.result.push({
                codigo: biblioteca[i].codigo,
                titulo: biblioteca[i].titulo,
                autor: biblioteca[i].autor,
            });
        }

        res.render('biblioteca', { biblioteca: json.result });
    } catch (error) {
        json.error = 'Erro ao buscar os livros';
        res.status(500).json(json);
    }
};

const buscarUm = async (req, res) => {
    const { codigo } = req.params;

    try {
        const livro = await BibliotecaServices.buscarUm(codigo);

        res.render('result-page', { data: {
            error: livro ? '' : 'Livro não encontrado!',
            result: livro || {}
        }});
    } catch (error) {
        console.error('Erro ao buscar o livro:', error);
        res.render('result-page', { data: {
            error: 'Erro ao buscar o livro!',
            result: {}
        }});
    }
}

const inserir = async (req, res) =>{
    console.log('Requisição recebida:', req.body);  
    let json = {error:'', result:{}}

    let titulo = req.body.titulo
    let autor = req.body.autor

    if(titulo && autor){
        let livroCodigo = await BibliotecaServices.inserir(titulo, autor)
        json.result = {
            codigo: livroCodigo,
            titulo,
            autor
        }
    }
    else{
        json.error = 'Campos não enviados!'
    }
    res.json(json)
}

const alterar = async (req, res) => {
    let json = {error:'', result: {}}
    const codigo = req.params.codigo
    const titulo = req.body.titulo
    const autor = req.body.autor
    if(codigo && titulo && autor){
        await BibliotecaServices.alterar(codigo, titulo, autor)
        json.result = {
            codigo,
            titulo,
            autor
        }
    }
    else{
        json.error = 'Campos não enviados!'
    }
    res.json(json)
}

const excluir = async (req, res) => {
    let json = {error:'', result: {}}
    const codigo = req.params.codigo

    if(codigo){
        await BibliotecaServices.excluir(codigo)
    }
    else{
        json.error = 'Campos não enviados!'
    }
    res.json(json)
}

export default {
    buscarTodos,
    buscarUm,
    inserir,
    alterar,
    excluir
};