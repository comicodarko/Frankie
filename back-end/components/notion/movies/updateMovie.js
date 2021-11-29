require('dotenv').config();

module.exports = async (notion, movie, action) => {
	if(action === 'check' || action === 'uncheck') {
		const response = await notion.pages.update({
			page_id: movie,
			properties: {
				Assistido: {
					checkbox: action === 'check' ? true : false
				}
			}
		})
		
		if(response.url) {
			return `${response.properties.Nome.title[0].text.content} assistido ✔️`;
		} else {
			return `Não consegui atualizar seus filmes ☹️`;
		}
	} else if(action === 'delete') {
		const response = await notion.pages.update({
			page_id: movie,
			archived: true
		})
		if(response.url) {
			return `${response.properties.Nome.title[0].text.content} deletado ❌`;
		} else {
			return `Não consegui atualizar seus filmes ☹️`;
		}
	}
            
}