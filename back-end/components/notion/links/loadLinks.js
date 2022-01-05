module.exports = async (notion, id, content) => {
    let database;
    let message;
	let links = [];
	let contentLabel;
    if(content) {
        const lower = content.toLowerCase();
        const first = lower.charAt(0).toUpperCase();
        const tag = first + lower.slice(1);
        message = `*🔗 Links sobre ${tag} 🔗*\n\n`;
		contentLabel = `🔗 Links sobre ${tag} 🔗`;

        database = await notion.databases.query({
            database_id: id,
            filter: {
                property: 'Tipo',
                multi_select: {
                    contains: tag
                }
            }
        })
    } else {
		message = '*🔗 Links 🔗*\n\n';
		contentLabel = '🔗 Links 🔗';
        database = await notion.databases.query({
            database_id: id,
        })
    }
    
    database.results.forEach(link => {
        message = message + `*- ${link.properties['Descrição'].title[0].text.content}*\n`;
		links.push({
			id: link.id,
			label: link.properties['Descrição'].title[0].text.content,
			link: link.properties.Link.url
		}) 
	})
    return {
		content: links,
		contentLabel,
		database: 'links',
		actions: ['link'],
		message
	};
};