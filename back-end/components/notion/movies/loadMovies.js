module.exports = async (notion, id, content) => {
    let database;
    let message;
	let movies = [];
	let contentLabel;
    if(isNaN(Number(content))) {
        if(content) {
            const lower = content.toLowerCase();
            const first = lower.charAt(0).toUpperCase();
            const gender = first + lower.slice(1);
            message = `*🎬 Filmes de ${gender} 🎬*\n\n`;
			contentLabel = `🎬 Filmes de ${gender} 🎬`;
    
            database = await notion.databases.query({
                database_id: id,
                filter: {
                    property: 'Gêneros',
                    multi_select: {
                        contains: gender
                    }
                }
            })
        } else {
            message = `*🎬 Todos os Filmes 🎬*\n\n`
			contentLabel = '🎬 Todos os Filmes 🎬';
            database = await notion.databases.query({
                database_id: id,
                // filter: {
                //     property: 'Assistido',
                //     checkbox: {
                //         equals: false
                //     }
                // }
            })
        }
    } else {
        message = `*🎬 Filmes do ano ${content} 🎬*\n\n`
		contentLabel = `🎬 Filmes do ano ${content} 🎬`;
        database = await notion.databases.query({
            database_id: id,
            filter: {
                property: 'Ano',
                number: {
                    equals: Number(content) 
                }
            }
        })
    }
    
    if(database.results.length > 0) {
        database.results.forEach(movie => {
			message = message + `*- ${movie.properties.Nome.title[0].text.content}*\n`;
			movies.push({
				id: movie.id,
				label: movie.properties.Nome.title[0].text.content,
				watched: movie.properties.Assistido.checkbox
			}) 	
		})
    } else {
        if(content) {
            message = `
                Sem filmes ${isNaN(Number(content))
                    ? `do gênero ${content}`
                    : `de ${content}`
                }
            `
        } else {
            message = `
                Nenhum Filme resgatado
            `
        }
    }
    return {
		content: movies,
		contentLabel,
		database: 'movies',
		actions: [
			// 'delete',
			'check'],
		message
	};
};