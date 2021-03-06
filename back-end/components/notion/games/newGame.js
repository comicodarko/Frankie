require('dotenv').config();
const searchGame = require('../../tgdb/searchGame');

const getMovie = require('../../tmdb/getMovie');

module.exports = async (notion, movie) => {
    return getMovie(movie).then(async result => {
        if(result) {
            const { title,  genres, original_title, runtime, release_date, 
                imdb_id, budget, poster_path, backdrop_path, status, tagline, overview} = result;
            
            const movies = await notion.databases.query({
                database_id: process.env.NOTION_MOVIES,
            })
    
            const found = movies.results.find(movie => 
                movie.properties.Nome.title[0].text.content === title || 
                movie.properties.Nome.title[0].text.content === original_title
            );
    
            if(found) {
                return `${title} já se encontra na sua lista de filmes 🙃`;
            } else {
                const response = await notion.pages.create({
                    parent: {
                        database_id: process.env.NOTION_MOVIES
                    },
                    properties: {
                        Nome: { title: [{text: {content: title}}] },
                        Ano: { number: Number(release_date.substring(0, 4))},
                        Duração: { number: runtime},
                        Done: {checkbox: false},
                        Gêneros: {multi_select: genres.map(genre => ({name: genre.name}))}
                    }
                })
                if(response.url) {
                    return `Adicionei ${title} aos seus filmes ✔️`;
                } else {
                    return `Consegui achar ${title}, mas não consegui salvar nos seus filmes ☹️`;
                }
            }
        } else {
            return 'Não consegui encontrar esse filme ☹️';
        }
    })
}