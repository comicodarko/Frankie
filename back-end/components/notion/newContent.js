const newTodo = require("./work/newTodo");
const newMovie = require("./movies/newMovie");

module.exports = async (notion, content) => {
    let database = content.slice(content.indexOf('[') + 1, content.indexOf(']')).toLowerCase();
    content = content.slice(content.indexOf('] ') + 2, content.length);
    
    if(!content.endsWith(']')) {
        switch(database) {
            case 'work': case 'w': case 'todo': case 't':
                return newTodo(notion, content).then(res => res);
    
            case 'movie': case 'movies': case 'filme': case 'filmes': case 'm': case 'f': 
                return newMovie(notion, content).then(res => res);
    
            // case 'link': case 'l':
            //     return newLink(notion, content).then(res => res);
    
            // default: 
            //     return newGeneral(notion, content).then(res => res);
        }
    } else {
        switch(database) {
            case 'tintoria': case 'tint': case 't':
                return 'Preciso que me diga a tarefa que deseja adicionar em Tintoria 😁';
    
            case 'movie': case 'movies': case 'filme': case 'filmes': case 'm': case 'f': 
                return 'Esqueceu de me dizer o filme que deseja adicionar em sua lista 😁';
    
            case 'link': case 'links': case 'l':
                return 'Você não me disse o link que deseja salvar 😁'
    
            // default: 
            //     return `${database} Não foi encontrado, as opções são: **Tintoria**, **Filmes**, **Links**`;
        }
    }
}