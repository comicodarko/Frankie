require('dotenv').config();

const loadMovies = require('./movies/loadMovies');
const updateMovie = require('./movies/updateMovie');
const loadTodo = require('./work/loadTodo');

module.exports = async (notion, message) => {
    const content = message.toLocaleLowerCase().split(' ');

    switch(content[1]) {
        // case 'work': case 'w': case 'todo': case 't':
        //     return loadTodo(notion, process.env.NOTION_TODO, content[1]).then(res => res);
    
        case 'movie': case 'movies': case 'filme': case 'filmes': case 'm':  
            return updateMovie(notion, content[2], content[3]).then(res => res);
       
		case '': 
			return 'Preciso que me diga o que listar 😁'
        // case 'links': case 'link': case 'l':  
        //     return loadLinks(notion, process.env.NOTION_LINKS).then(res => res);
    
        default: 
            return 'Não entendi, poderia repetir?'
    } 
};