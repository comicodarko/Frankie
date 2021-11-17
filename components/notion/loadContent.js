require('dotenv').config();

const loadMovies = require('./movies/loadMovies');

module.exports = async (notion, message) => {
    const sliced = message.slice(message.indexOf('!list') + 6, message.length);
    const content = sliced.split(' ');
    
    switch(content[0]) {
        // case 'tintoria': case 'tint': case 't':
        //     return loadTintoria(notion, process.env.NOTION_TINTORIA).then(res => res);
    
        case 'movie': case 'movies': case 'filme': case 'filmes': case 'm':  
            return loadMovies(notion, process.env.NOTION_MOVIES, content[1]).then(res => res);
        
        // case 'links': case 'link': case 'l':  
        //     return loadLinks(notion, process.env.NOTION_LINKS).then(res => res);
    
        // default: 
        //     return loadGeneral(notion, process.env.NOTION_GENERAL).then(res => res);
    } 
};