require('dotenv').config();

const getMovie = require('../../tmdb/getMovie');

module.exports = async (movie) => {
    return getMovie(movie).then(async result => {
        if(result) {
            const { title,  genres, original_title, runtime, release_date, 
                imdb_id, budget, poster_path, backdrop_path, status, tagline, overview, providers} = result;
            
            const movies = await global.notion.databases.query({
                database_id: process.env.NOTION_MOVIES,
            })

            const found = movies.results.find(movie => 
                movie.properties.Nome.title[0].text.content === title || 
                movie.properties.Nome.title[0].text.content === original_title
            );
    
            if(found) {
                return `${title} já se encontra na sua lista de filmes 🙃`;
            } else {
                const response = await global.notion.pages.create({
                    parent: {
                        database_id: process.env.NOTION_MOVIES
                    },
                    properties: {
                        Nome: { title: [{text: {content: title}}] },
                        Ano: { number: Number(release_date.substring(0, 4))},
                        Duração: { number: runtime},
                        Done: {checkbox: false},
                        Gêneros: {multi_select: genres.map(genre => ({name: genre.name}))},
						Onde: {files: [
							...providers.map(provider => ({
								name: provider.provider_name,
								type: 'external',
								external: { url: provider.logo_path }
							}))
						]}
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