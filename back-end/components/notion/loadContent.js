require('dotenv').config();

const loadMovies = require('./movies/loadMovies');
const loadTodo = require('./todo/loadTodo');
const loadLinks = require('./links/loadLinks');

module.exports = async (notion, message) => {
	let sliced;
	if(message.toLocaleLowerCase().startsWith('!list')) {
		sliced = message.slice(message.indexOf('!list') + 6, message.length);
	} else if(message.toLocaleLowerCase().startsWith('!l ')) {	
		sliced = message.slice(message.indexOf('!l') + 3, message.length);
	}
    const content = sliced.split(' ');
	
    switch(content[0]) {
        case 'to-do': case 'todo': case 't':
            return loadTodo(notion, process.env.NOTION_TODO, content[1]).then(res => res);
    
        case 'movie': case 'movies': case 'filme': case 'filmes': case 'm':  
            return loadMovies(notion, process.env.NOTION_MOVIES, content[1]).then(res => res);
       
		case 'links': case 'link': case 'l':  
		    return loadLinks(notion, process.env.NOTION_LINKS).then(res => res);
		
		case '': 
			return {message: 'Preciso que me diga o que listar 😁'}
    } 
};