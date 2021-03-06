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
            message = `*π¬ Filmes de ${gender} π¬*\n\n`;
			contentLabel = `π¬ Filmes de ${gender} π¬`;
    
            database = await notion.databases.query({
                database_id: id,
                filter: {
                    property: 'GΓͺneros',
                    multi_select: {
                        contains: gender
                    }
                }
            })
        } else {
            message = `*π¬ Todos os Filmes π¬*\n\n`
			contentLabel = 'π¬ Todos os Filmes π¬';
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
        message = `*π¬ Filmes do ano ${content} π¬*\n\n`
		contentLabel = `π¬ Filmes do ano ${content} π¬`;
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
				checked: movie.properties.Done.checkbox
			}) 	
		})
    } else {
        if(content) {
            message = `
                Sem filmes ${isNaN(Number(content))
                    ? `do gΓͺnero ${content}`
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