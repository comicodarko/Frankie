module.exports = async (notion, id, content) => {
    let database;
    let message;
	let links = [];
	let contentLabel;
    if(content) {
        const lower = content.toLowerCase();
        const first = lower.charAt(0).toUpperCase();
        const tag = first + lower.slice(1);
        message = `*๐ Links sobre ${tag} ๐*\n\n`;
		contentLabel = `๐ Links sobre ${tag} ๐`;

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
		message = '*๐ Links ๐*\n\n';
		contentLabel = '๐ Links ๐';
        database = await notion.databases.query({
            database_id: id,
        })
    }
    
    database.results.forEach(link => {
        message = message + `*- ${link.properties['Descriรงรฃo'].title[0].text.content}*\n`;
		links.push({
			id: link.id,
			label: link.properties['Descriรงรฃo'].title[0].text.content,
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