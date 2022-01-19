const newTodo = require("./todo/newTodo");
const newMovie = require("./movies/newMovie");
const searchGame = require("./games/newGame");

module.exports = async (notion, content) => {
	let database;
	if(content.indexOf('] ') !== -1) {
		database = content.slice(content.indexOf('[') + 1, content.indexOf(']')).toLowerCase().trim();
		content = content.slice(content.indexOf('] ') + 2, content.length).trim();
	} else {
		return 'Não consegui entender 😕'
	}
    
    if(!content.endsWith(']')) {
        switch(database) {
            case 'to-do': case 'todo': case 't':
                return newTodo(notion, content).then(res => res);
    
            case 'movie': case 'movies': case 'filme': case 'filmes': case 'm': case 'f': 
                return newMovie(notion, content).then(res => res);
    
			case 'game': case 'games': case 'jogo': case 'j': case 'jogos': case 'g':
			    return newGame(notion, content).then(res => res);
			
				case '': 
				return 'As opções são **To-do**, **Filmes**, **Links** 🔖'
    
            default: 
                return `${database} não foi encontrado, as opções são: **To-do**, **Filmes**, **Links** 🔖`;
        }
    } else {
        switch(database) {
            case 'todo': case 'to-do': case 't':
                return 'Preciso que me diga a tarefa que deseja adicionar em To-do 😁';
    
            case 'movie': case 'movies': case 'filme': case 'filmes': case 'm': case 'f': 
                return 'Esqueceu de me dizer o filme que deseja adicionar em sua lista 😁';
    
            case 'link': case 'links': case 'l':
                return 'Você não me disse o link que deseja salvar 😁'
    
			case '': 
				return 'Não consegui entender 😕'
            
				default: 
                return `${database} não foi encontrado, as opções são: **To-do**, **Filmes**, **Links** 🔖`;
        }
    }
}